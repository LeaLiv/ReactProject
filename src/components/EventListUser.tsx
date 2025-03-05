import { useContext } from "react"
import { NavLink, Outlet } from "react-router-dom";
import { EventsContext } from "../api/context/events.context";

export const EventListUser = () => {
    const { events } = useContext(EventsContext);

    return <div>
        <h1>Event list for user</h1>
        {events?.map(e => <li key={e.id}> <NavLink to={e.id} > {e.description}</NavLink> </li>)}
        {/* <Outlet /> */}

    </div >
}