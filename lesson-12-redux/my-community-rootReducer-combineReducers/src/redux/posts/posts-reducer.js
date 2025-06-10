import { ADD_POST, DELETE_POST } from "./posts-types";

const postsReducer = (store = [], {type, payload})=> {
    switch(type){
        case ADD_POST:
            return [...store, payload];
        case DELETE_POST:
            return store.filter(item => item.id !== payload);
        default:
            return store;
    }
}

export default postsReducer;