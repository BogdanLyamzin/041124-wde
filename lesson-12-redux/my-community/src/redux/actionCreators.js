import { nanoid } from "nanoid";

import { ADD_COMMUNITY, DELETE_COMMUNITY, ADD_POST, DELETE_POST } from "./types";

export const addCommunityCreator = payload => ({
    type: ADD_COMMUNITY,
    payload: {
        id: nanoid(),
        ...payload,
    },
})

export const deleteCommunityCreator = payload => ({
    type: DELETE_COMMUNITY,
    payload,
})

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