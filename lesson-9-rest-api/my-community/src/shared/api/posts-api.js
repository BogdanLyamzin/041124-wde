import axios from "axios";

import requestDecorator from "../lib/request-decorator";

const postsInstance = axios.create({
    baseURL: "https://67e3b7b52ae442db76d13e6a.mockapi.io/api/posts"
});

export const fetchPostsApi = requestDecorator(()=> postsInstance.get("/"));

export const deletePostByIdApi = requestDecorator(id => postsInstance.delete(`/${id}`));

export const addPostApi = requestDecorator(payload => postsInstance.post("/", payload));