import axios from "axios";

const todoInstance = axios.create({
    baseURL: "https://67e3b7b52ae442db76d13e6a.mockapi.io/api/todo"
});

export const fetchTodoApi = async () => {
    const {data} = await todoInstance.get("/");
    return data;
}

export const addTodoApi = async payload => {
    const {data} = await todoInstance.post("/", payload);
    return data;
}

export const deleteTodoApi = async id => {
    const {data} = await todoInstance.delete(`/${id}`);
    return data;
}

export const updateTodoApi = async (id, payload) => {
    const {data} = await todoInstance.put(`/${id}`, payload);
    return data;
}