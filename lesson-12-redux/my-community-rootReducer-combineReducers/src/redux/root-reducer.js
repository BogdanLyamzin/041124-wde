import { combineReducers } from "redux";

import channelsReducer from "./channels/channels-reducer";
import postsReducer from "./posts/posts-reducer";

const rootReducer = combineReducers({
    channels: channelsReducer,
    posts: postsReducer
});

export default rootReducer;