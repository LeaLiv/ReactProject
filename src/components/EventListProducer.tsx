import { NavLink, useParams } from "react-router-dom";
import { useHttp } from "../custom-hooks/useHttp";
import { MyEvent } from "../types/Event";
import { useContext, useEffect, useState } from "react";
import { EventsContext } from "../api/context/events.context";

export const EventtListProducer = () => {
    const { email } = useParams();
    // let producerEvents: MyEvent[] | undefined;
    const { events, refresh } = useContext(EventsContext);
    useEffect(() => {
        if (refresh)
            refresh();
        setEventsList(events as MyEvent[]); // עדכן את רשימת האירועים המקומית


    }, []);
    const { error: deleteEventError, request: requestDeleteEvent } = useHttp<MyEvent>('/event', 'delete');
    const { error: addEventError, request: addEvent } = useHttp<MyEvent>('/event', 'post');
    const [addEventState, setAddEventState] = useState(false);
    const [eventsList,setEventsList] = useState<MyEvent[]>(events as MyEvent[]);

    const deleteFunc = async (eventId: string) => {
        try {
            await requestDeleteEvent(); // העבר את ה-URL הדינמי כאן
            refresh; // רענן את רשימת האירועים
        } catch (error) {
            console.error("Error deleting event:", error);
        }
    };
    const insertEvent = async (event:any) => {
        event.preventDefault();
        const newEvent: MyEvent = {
            id:Math.random().toString(36).substring(2, 9),
            name: event.target.name.value,
            description: event.target.description.value,
            producerEmail: email as string,
        };

        try {
            await addEvent(newEvent);
            setAddEventState(false); // סגור את טופס הוספת האירוע 
            refresh; // רענן את רשימת האירועים
            setEventsList(events as MyEvent[]);
        } catch (error) {
            console.error("Error deleting event:", error);
        }
    }

    return (
        <div className="producer-event-list">
            <h1>רשימת האירועים שלך: </h1>
            <ul>
                {
                // Array.isArray(eventsList) &&
                    eventsList
                        .filter(event => event.producerEmail === email)
                        .map(event =>
                            <li key={event.id}>
                                <NavLink to={`/producers/EventDetailProducer/${event.id}`}>
                                    {event.name}
                                </NavLink>
                                <button onClick={() => deleteFunc(event.id)}>Delete</button>
                                {deleteEventError && <p className="error-text">{deleteEventError}</p>}
                            </li>
                        )
                }
            </ul>
            {<button onClick={() => setAddEventState(true)} disabled={addEventState}>הוספת אירוע </button>}

            {addEventState && (
                <form onSubmit={insertEvent}>
                    <label htmlFor="name">שם אירוע </label>
                    <input type="text" name="name" />
                    <br />
                    <label htmlFor="phone">תיאור </label>
                    <input type="text" name="description" />
                    <br />
                    <button type="submit"> יצירת אירוע</button>

                </form>
            )}
        </div>
    );
}