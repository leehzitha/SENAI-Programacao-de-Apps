import { useEffect } from "react";
import { useState } from "react";

export const DivColor = () => {
    const [color, setColor] = useState("red");
   
    useEffect(() => {
        const timer = setInterval(() => {
            setColor(prevColor => (prevColor === "red" ? "blue" : "red"));
        }, 1000);
        return () => clearInterval(timer);
    }, []); 

        return (
        <div style={{backgroundColor: color, padding: '50px'}}></div>
    )
}

export default DivColor;