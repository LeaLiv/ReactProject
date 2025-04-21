import { use, useEffect, useState } from "react";
import { useHttp } from "../custom-hooks/useHttp";
import { Producer } from "../types/Producer";
import { useParams } from "react-router-dom";
import { EventtListProducer} from "./EventListProducer";

export const ProducerDetail = () => {

    const email = useParams<{ email: string }>().email;

    const [updateProducer, setUpdateProducer] = useState(false);

    const { data, request: getRequest } = useHttp<Producer>(`/producer/${email}`, 'get');
    const { error: updateError, isLoading: UpdateIsLoading, request: putRequest } = useHttp<Producer>(`/producer/${email}`, 'put');

    useEffect(() => {
        if (email)
            try {
                getRequest();
            } catch (error) {
                console.log(error);
            }
    }, [email, getRequest])

    const editProducer = async (event: any) => {
        event.preventDefault();
        const updatedProducer: Producer = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            description: event.target.description.value
        };
        try {
            // await putRequest(updatedProducer); 
            putRequest(updatedProducer);
            await getRequest(); 
            setUpdateProducer(false);
            event.target.reset();
        } catch (error) {
            console.log(error);
        }



    }

    return <>
        <h1>פרטי מפיק</h1>
        {data && (
            <div>
                <p>שם: {data.name}</p>
                <p>מייל: {data.email}</p>
                <p>טלפון: {data.phone}</p>
                <p>תיאור: {data.description}</p>
                {!updateProducer && <button onClick={() => setUpdateProducer(true)}>עדכון פרטים</button>}

                {updateProducer && (
                    <form onSubmit={editProducer}>
                        <label htmlFor="name">שם מפיק/ה </label>
                        <input type="text" defaultValue={data.name} name="name" />
                        <br />
                        <label htmlFor="email">מייל </label>
                        <input type="tel" defaultValue={data.phone} name="phone" />
                        <br />
                        <label htmlFor="phone">טלפון </label>
                        <input type="email" defaultValue={data.email} name="email" />
                        <br />
                        <label htmlFor="description">תיאור </label>
                        <input type="text" defaultValue={data.description} name="description" />
                        <button disabled={UpdateIsLoading} type="submit">עדכון מפיק/ה</button>
                        {UpdateIsLoading && <p>מעדכן...</p>}
                        {updateError && <p className="error">{updateError}</p>}

                    </form>
                )}
                <EventtListProducer/>
                    
            </div>
            


        )}
    </>
}