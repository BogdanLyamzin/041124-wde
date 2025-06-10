import { ADD_CHANNEL, DELETE_CHANNEL  } from "./channels-types";

const ChannelsReducer = (store = [], {type, payload})=> {
    switch(type) {
        case ADD_CHANNEL:
            return [...store, payload];
        case DELETE_CHANNEL:
            return store.filter(item => item.id !== payload);
        default:
            return store;
    }
}

export default ChannelsReducer;