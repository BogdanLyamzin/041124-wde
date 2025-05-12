import axios from "axios";

import requestDecorator from "./request-decorator";

const postsInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
});

export const getPostsApi = requestDecorator(()=> postsInstance.get("/"));

export const getPostByIdApi = requestDecorator(id => postsInstance.get(`/${id}`))
