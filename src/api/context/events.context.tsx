import { createContext } from "react";
import { AgeGroup, EventsContextType, MyEvent } from "../../types/Event";

export const EventsContext = createContext<Partial<EventsContextType>>({});

export const EventsProvider = (props: any) => {

    const arr:MyEvent  []=[
        {
          id: "1",
          name: "Men's Fitness Expo",
          producerName: "FitLife",
          description: "A fitness event focused on strength training and endurance for men.",
          ageGroup: AgeGroup.men,
        },
        {
          id: "2",
          name: "Women's Leadership Summit",
          producerName: "Women Empowerment Org",
          description: "A conference aimed at empowering women in leadership roles.",
          ageGroup: AgeGroup.women,
        },
        {
          id: "3",
          name: "Young Entrepreneurs Workshop",
          producerName: "Startup Hub",
          description: "A workshop designed to help young professionals launch their businesses.",
          ageGroup: AgeGroup.young,
        },
        {
          id: "4",
          name: "Children's Science Fair",
          producerName: "EduTech",
          description: "A fun and educational science fair for children.",
          ageGroup: AgeGroup.children,
        },
        {
          id: "5",
          name: "Youth Sports Championship",
          producerName: "National Sports League",
          description: "A national championship event for young athletes.",
          ageGroup: AgeGroup.young,
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