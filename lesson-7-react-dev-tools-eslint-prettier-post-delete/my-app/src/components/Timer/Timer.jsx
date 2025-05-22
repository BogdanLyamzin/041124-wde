import { useState, useEffect } from "react";

const Timer = ()=> {
    const [time, setTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(()=> {
        return ()=> clearInterval(intervalId);
    }, [intervalId]);

    const onStart = ()=> {
       const id = setInterval(()=> {
            console.log(time);
            setTime(prevTime => prevTime + 1);
        }, 1000);
        setIntervalId(id);
    }

    const onStop = ()=> {
        clearInterval(intervalId);
    }

    const onReset = ()=> {
        onStop();
        setTime(0);
    }

    return (
        <div>
            <p>{time}</p>
            <div>
                <button onClick={onStart}>Start</button>
                <button onClick={onStop}>Stop</button>
                <button onClick={onReset}>Reset</button>
            </div>
        </div>
    )
}

export default Timer;