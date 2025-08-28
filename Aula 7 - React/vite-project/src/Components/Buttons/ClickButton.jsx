import { useState } from 'react';

export const ClickButton = () => {
    const [num, setNum] = useState(0);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        const nextNum = num + 1;
        if (nextNum == 10)
        {
            setNum(0);
            setCount(count + 1);
        }
        else {
            setNum(nextNum);
        }
    };

    return (
        <button onClick={handleClick}>
            {count}
        </button>
    );
};

export default ClickButton;