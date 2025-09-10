import { useEffect } from "react";
import { useState } from "react";

export const TrafficLights = () => {
    const [color, setColor] = useState("green");

    useEffect(() => {
        const order = ["green", "yellow", "red"];
        let index = 0;

        const timer = setInterval(() => {
            index = (index + 1) % order.length;
            setColor(order[index]);

        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{width: "150px", height: "150px", marginTop: "20px", backgroundColor: color}}></div>
    )
}

export default TrafficLights;
