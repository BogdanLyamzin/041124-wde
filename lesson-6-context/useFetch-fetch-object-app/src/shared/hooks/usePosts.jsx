import { useContext } from "react";

import { postsContext } from "../../context/PostsProvider";

const usePosts = ()=> {
    const context = useContext(postsContext);
    console.log(context)
    return context;
}

export default usePosts;