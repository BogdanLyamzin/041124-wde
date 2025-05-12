import {  createContext } from "react";

import useFetch from "../shared/hooks/useFetch";

import { getPostsApi } from "../shared/api/posts-api";

export const postsContext = createContext([]);

const PostsProvider = ({ children }) => {
  const {
    state: posts,
    loading,
    error,
  } = useFetch({ request: getPostsApi, initialState: [] });
  //   const [posts, setPosts] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const fetchPosts = async () => {
  //       setLoading(true);
  //       const { data, error } = await getPostsApi();
  //       setLoading(false);
  //       if (data) return setPosts(data);
  //       setError(error.response?.data?.message || error.message);
  //     };

  //     fetchPosts();
  //   }, []);

  return (
    <postsContext.Provider value={{ posts, loading, error }}>
      {children}
    </postsContext.Provider>
  );
};

export default PostsProvider;
