import { useState, useEffect } from "react";

const useFetch = ({request, initialState})=> {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const { data, error } = await request();
        setLoading(false);
        if (data) return setState(data);
        setError(error.response?.data?.message || error.message);
      };
  
      fetchPosts();
    }, [request]);

    return {state, loading, error};
}

export default useFetch;