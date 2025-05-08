import { useState, useEffect } from "react";

const useLocalStorage = ({ key, defaultValue, checkData }) => {
  const [state, setState] = useState(() => {
    try {
      const data = JSON.parse(localStorage.getItem(key));
      return checkData(data) ? data : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return { state, setState };
};

export default useLocalStorage;
