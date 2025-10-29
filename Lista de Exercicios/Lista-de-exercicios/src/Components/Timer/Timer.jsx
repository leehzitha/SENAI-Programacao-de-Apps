import { useState, useEffect } from "react";

const Timer = () => {
    const [inputSegundos, setInputSegundos] = useState(30);
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isActive && timeRemaining > 0) {
            interval = setInterval(() => {
                setTimeRemaining(secs => secs - 1);
            }, 1000);
        } else if (timeRemaining === 0) {
            setIsActive(false);
        }

        return () => clearInterval(interval);
    }, [isActive, timeRemaining]); 

    const handleStart = () => {
        if (inputSegundos > 0) {
            setTimeRemaining(inputSegundos);
            setIsActive(true);
        }
    };

    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div>
            <h2>Temporizador</h2>
            <input
                type="number"
                value={inputSegundos}
                onChange={(e) => setInputSegundos(parseInt(e.target.value))}
                placeholder="Segundos"
                disabled={isActive}
            />
            <div style={{ fontSize: '48px', margin: '10px 0' }}>
                {formatTime(timeRemaining)}
            </div>
            <div>
                <button onClick={handleStart} disabled={isActive}>Iniciar</button>
            </div>
            {timeRemaining === 0 && !isActive && inputSegundos > 0 && <p>Tempo esgotado!</p>}
        </div>
    );
}

export default Timer;