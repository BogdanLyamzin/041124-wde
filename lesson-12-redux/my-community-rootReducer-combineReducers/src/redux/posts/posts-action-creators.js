import { nanoid } from "nanoid";

import { ADD_POST, DELETE_POST } from "./posts-types";

export const addPostCreator = payload => ({
    type: ADD_POST,
    payload: {
        id: nanoid(),
        ...payload,
    }
})

export const deletePostCreator = payload => ({
    type: DELETE_POST,
    payload,
})
