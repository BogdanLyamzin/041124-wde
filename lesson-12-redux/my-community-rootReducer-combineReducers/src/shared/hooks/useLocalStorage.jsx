import { useState, useEffect, useRef } from "react";

const useLocalStorage = ({ key, defaultValue, checkData }) => {
  const [state, setState] = useState(() => {
    try {
      const data = JSON.parse(localStorage.getItem(key));
      return checkData(data) ? data : defaultValue;
    } catch {
      return defaultValue;
    }
  });
  
  const firstRender = useRef(true);

  useEffect(() => {
    if(!firstRender.current) {
      localStorage.setItem(key, JSON.stringify(state));
    }
    else firstRender.current = false;
  }, [state, key]);

  return { state, setState };
};

export default useLocalStorage;
