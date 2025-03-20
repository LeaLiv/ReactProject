import { createContext } from "react";
import { EventsContextType, MyEvent } from "../../types/Event";

export const EventsContext = createContext<Partial<EventsContextType>>({});

export const EventsProvider = (props: any) => {

    const arr:MyEvent  []=[
        {
            id: "1",
            name: "פסטיבל מוזיקה חיה",
            producerEmail: "Live Events Ltd",
            description: "פסטיבל עם הופעות של אמנים מובילים מכל העולם",

        },
        {
            id: "2",
            name: "סדנת יצירה לילדים",
            producerEmail: "KidsArt Studio",
            description: "סדנה כיפית ליצירת יצירות אמנות בצבעי מים",

        },
        {
            id: "3",
            name: "כנס סטארט-אפים",
            producerEmail: "TechHub",
            description: "מפגש ליזמים, משקיעים וחובבי טכנולוגיה",
        },
        {
            id: "4",
            name: "תחרות משחקי וידאו",
            producerEmail: "eSports League",
            description: "למדו להכין פסטות וריזוטו כמו שפים מקצועיים",
        },
        {
            id: "5",
            name: "סדנת בישול איטלקי",
            producerEmail: "Gourmet Academy",
            description: "למדו להכין פסטות וריזוטו כמו שפים מקצועיים",
        },
      ];
    const contextValue:EventsContextType={
        events:arr!
        
    }

    return <EventsContext.Provider value={contextValue}>
    {/* props.children: מאפיין קבוע שמכיל את התוכן שנשלח בתוך הקומפוננטה כאשר משתמשים בה */}
    {/* { isLoading && 'Loading...' }
    { error && error }
    { !error && props.children } */}
    {props.children}
</EventsContext.Provider>
}