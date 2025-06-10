import { nanoid } from "nanoid";

import { ADD_CHANNEL, DELETE_CHANNEL  } from "./channels-types";

export const addChannelCreator = payload => ({
    type: ADD_CHANNEL,
    payload: {
        id: nanoid(),
        ...payload,
    },
})

export const deleteChannelCreator = payload => ({
    type: DELETE_CHANNEL,
    payload,
})
