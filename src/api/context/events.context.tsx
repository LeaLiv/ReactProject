import { createContext, useState } from "react";
import { EventsContextType, MyEvent } from "../../types/Event";
import { useHttp } from "../../custom-hooks/useHttp";

export const EventsContext = createContext<Partial<EventsContextType>>({});

export const EventsProvider = (props: any) => {

    const { data ,error,isLoading,request } = useHttp<MyEvent[]>('/event', 'get');
    const [events,setEvents]=useState<MyEvent[]>(data || [])

// console.log(` data: ${data}`);
// data?.forEach(element => {
//     console.log(element)
// });

// data=data?.map(e)
    const refresh=async ()=>{
        const response=await request();
        if(response != null)
            setEvents(response)
    }
    const contextValue: EventsContextType = {
        events:data!,
        refresh:refresh

    }


    return <EventsContext.Provider value={contextValue}>
    {/* props.children: מאפיין קבוע שמכיל את התוכן שנשלח בתוך הקומפוננטה כאשר משתמשים בה */}
    { isLoading && 'Loading...' }
    { error && error }
    { !error && props.children }
    {/* {props.children} */}
</EventsContext.Provider>
}