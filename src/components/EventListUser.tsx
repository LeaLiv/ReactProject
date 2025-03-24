import { useContext, useEffect } from "react"
import { NavLink, Outlet } from "react-router-dom";
import { EventsContext } from "../api/context/events.context";

export const EventListUser = () => {
    const { events, refresh } = useContext(EventsContext);

    useEffect(() => {
        if (refresh)
            refresh();
    }, []); 

    
    return <div>
        <h1>Event list for user</h1>        
        {events?.map(e => <li  key={e.id}> <NavLink to={`/user/${e.id}`} > {e.name}</NavLink> </li>)}


    </div >
}