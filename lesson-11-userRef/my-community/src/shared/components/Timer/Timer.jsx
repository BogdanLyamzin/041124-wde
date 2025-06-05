import { useState, useEffect, useRef } from "react";

const Timer = ()=> {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    useEffect(()=> {
        return ()=> clearInterval(intervalRef.current);
    }, []);

    const onStart = ()=> {
        intervalRef.current = setInterval(()=> {
            setTime(prevTime => prevTime + 1);
        }, 1000);
    }

    const onStop = ()=> {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
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