import { nanoid } from "nanoid";

import { ADD_NOTE, EDIT_NOTE, TOGGLE_IMPORTANT_NOTE, DELETE_NOTE } from "./notes-types";

export const addNoteCreator = payload => ({
    type: ADD_NOTE,
    payload: {
        id: nanoid(),
        ...payload,
    }
})

export const editNoteCreator = payload => ({
    type: EDIT_NOTE,
    payload,
});

export const toggleNoteImportantCreator = payload => ({
    type: TOGGLE_IMPORTANT_NOTE,
    payload,
})

export const deleteNoteCreator = payload => ({
    type: DELETE_NOTE,
    payload
})