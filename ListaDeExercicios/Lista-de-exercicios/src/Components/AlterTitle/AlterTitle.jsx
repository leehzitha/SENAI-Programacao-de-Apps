import { useState, useEffect } from "react";

export default function AlterTitle() {
    const [num, setNum] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setNum(prevNum => prevNum + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        document.title = `Counter: ${num}`;
    }, [num]);

    return (
        <div>
            <p>Contador: {num}</p>
        </div>
    );
}
