import {useState, useEffect} from "react";

const useLocalStorage = (key, defaultValue, isJSON = false)=> {
    const [state, setState] = useState(()=> {
        try {
            let value = localStorage.getItem(key);
            if(isJSON) {
                value = JSON.parse(value);
            }
            return value || defaultValue;
        }
        catch {
            return defaultValue;
        }
    });

    useEffect(()=> {
        const newValue = isJSON ? JSON.stringify(state): state;
        localStorage.setItem(key, newValue);
    }, [state, key, isJSON]);

    return [state, setState];
}

export default useLocalStorage;