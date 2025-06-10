import { ADD_COMMUNITY, DELETE_COMMUNITY, ADD_POST, DELETE_POST } from "./types";

const inintialStore = {
  communities: [],
  posts: [],
};

const reducer = (store = inintialStore, action) => {
    switch(action.type) {
        case ADD_COMMUNITY:
            const {communities} = store;
            return {...store, communities: [...communities, action.payload]};
        case DELETE_COMMUNITY:
            const newCommunities = store.communities.filter(item => item.id !== action.payload);
            return {...store, communities: newCommunities};
        case ADD_POST:
            const {posts} = store;
            return {...store, posts: [...posts, action.payload]};
            case DELETE_POST:
                const newPosts = store.posts.filter(item => item.id !== action.payload);
                return {...store, posts: newPosts};
        default:
            return store;
    }
};

export default reducer;
