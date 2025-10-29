import { useEffect } from "react";
import { useState } from "react";

export default function ParOuImpar(){
    const [counter, setCounter] = useState(0);
    const [texto, setTexto] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter(prev => {
                const novo = prev+1
                setTexto(novo % 2 === 0 ? "Par" : "Impar");
                return novo;
            });
            
        }, 1000);
        return () => clearInterval(timer);
    })

    return (
        <div>
            <h1>{counter}</h1>
            <p>{texto}</p>
        </div>
    ) 
}