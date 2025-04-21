import { NavLink, useParams } from "react-router-dom";
import { useHttp } from "../custom-hooks/useHttp";
import { MyEvent } from "../types/Event";
import { useContext, useEffect } from "react";
import { EventsContext } from "../api/context/events.context";

export const EventtListProducer = () => {
    const { email } = useParams();
    // let producerEvents: MyEvent[] | undefined;
    const { events, refresh } = useContext(EventsContext);
    useEffect(() => {
        if (refresh) 
            refresh();


    }, []);
    // let producerEvents = events?.filter(event => event.producerEmail === email);

    const { error: deleteEventError, request: requestDeleteEvent } = useHttp<MyEvent>('', 'delete');


    const deleteFunc = async (eventId: string) => {
        try {
            await requestDeleteEvent(`/events/${eventId}`); // העבר את ה-URL הדינמי כאן
            refresh; // רענן את רשימת האירועים
        } catch (error) {
            console.error("Error deleting event:", error);
        }
    };

    return (
        <div className="producer-event-list">
            <h1>רשימת האירועים שלך: </h1>
            <ul>
                {Array.isArray(events) &&
                    events
                        .filter(event => event.producerEmail === email)
                        .map(event =>
                            <li key={event.id}>
                                <NavLink to={`/producers/sign-in/${email}/${event.id}`}>
                                    {event.name}
                                </NavLink>
                                <button onClick={() => deleteFunc(event.id)}>Delete</button>
                                {deleteEventError && <p className="error-text">{deleteEventError}</p>}
                            </li>
                        )
                }
            </ul>
        </div>
    );
}