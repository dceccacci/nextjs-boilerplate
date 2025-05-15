'use client';

import { ExampleType } from "@/types/exampleType"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"

type ExampleContextType = {
    examples: ExampleType[];
    limit: number;
    setLimit: (limit: number) => void;
    fetchExample: () => void;
}

const exampleContext = createContext<ExampleContextType | undefined>(undefined);

export const ExampleProvider = ({children} : {children: ReactNode})=> {
    const [examples, setExamples] = useState<ExampleType[]>([]);
    const [limit, setLimit] = useState<number>(20);

    function fetchExample(){
        fetch(`/api/example?limit=${limit}}`).
        then((r)=>r.json()).
        then((d)=>setExamples(d))
    }
    return (
        <exampleContext.Provider value={{examples, limit, setLimit, fetchExample}}>
            {children}
        </exampleContext.Provider>
    );
}

export function useExampleProvider() {
    const context = useContext(exampleContext);
    if (context===undefined) {
        throw new Error("Do better");
    }
    useEffect(() => {
        context.fetchExample();
    }, [])
    useEffect(()=>{
        context.fetchExample();
    },[context.limit]);

    return context;
}