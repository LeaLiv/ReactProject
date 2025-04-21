import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const EventInstance=axios.create({
    baseURL: 'http://localhost:3000',
})

type HttpMethod = 'get' | 'post' | 'put' | 'delete'

export function useHttp<T>(url:string,method:HttpMethod){
    
    const [isLoading, setIsLoading] = useState(false);
    const [error, setIsError] = useState('');
    const [data, setData] = useState<T>();
    
    
    const request = useCallback(async (...params: any[]) => {
        setIsLoading(true);
        setIsError('');
        try {
            const result = await EventInstance[method]<T>(url, ...params);
            setIsLoading(false);
            
            setData(result.data);
        } catch(error) {
            setIsLoading(false);
            setIsError('error while fetching data');
        }
        finally {
            setIsLoading(false);
        }
    }, [method, url]);


    useEffect(() => {
        if (method === 'get') {
            request();
        }

    }, [])

    return { data ,error,isLoading,request }
}