export type MyEvent = {
    id: string,
    name: string,
    producerEmail: string,
    description: string,
 
}


export type EventsContextType = {
    events: MyEvent[],
    // updateEvent: (id: string, newEvent: MyEvent) => void,
    refresh: () => Promise<unknown>
}