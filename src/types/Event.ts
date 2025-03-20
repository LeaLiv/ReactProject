export type MyEvent = {
    id: string,
    name: string,
    producerEmail: string,
    description: string,
 
}


export type EventsContextType = {
    events: MyEvent[],
    // updateTask: (id: string, newTask: Task) => void,
    // refresh: () => Promise<unknown>
}