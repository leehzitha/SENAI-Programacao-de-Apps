import {useState} from "react"
export const Counter = () => {
    const [num, setNum] = useState(0);

    function Add() {
        setNum(num => num + 1);
    }

    function Sub() {
        setNum(num => num -1);
    }

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={() => Add()}>+</button>
            <button onClick={() => Sub()}>-</button>
        </div>
    )

}

export default Counter;