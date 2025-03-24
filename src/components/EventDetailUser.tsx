import { useContext, useEffect } from "react"

import { EventsContext } from "../api/context/events.context"
import { useParams } from "react-router-dom"

export const EventDetailUser = () => {

    const { id } = useParams();
    const { events } = useContext(EventsContext);
    const event = events?.find(e => e.id === id);
    if(!event) return <h2>האירוע לא נמצא</h2>
    return <div>
        <h1>{event.name}</h1>
        <p>{event.descripition}</p><br />
        <p><strong>אימייל המפיק:</strong>{event.producerEmail}</p>
    </div>
}

