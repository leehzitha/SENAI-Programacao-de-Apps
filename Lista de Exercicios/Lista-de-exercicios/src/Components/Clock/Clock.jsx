import { useEffect } from "react";
import { useState } from "react";
import './Clock.css'

export default function Clock() {
    const [currTime, setCurrtime] = useState(new Date());


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrtime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, [])

    return (
        <div>
            <p className="clock">
                {currTime.toLocaleTimeString()}
            </p>
        </div>
    )
}
