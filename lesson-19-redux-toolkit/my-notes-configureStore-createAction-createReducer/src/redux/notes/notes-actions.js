import { nanoid } from "nanoid";
import {createAction} from "@reduxjs/toolkit";

export const addNote = createAction("notes/add", function prepare(data) {
    console.log(data);
    return {
        payload: {
            id: nanoid(),
            ...data,
        }
    }
});

export const editNote = createAction("notes/edit");

export const toggleNoteImportant = createAction("notes/toggle-important");

export const deleteNote = createAction("notes/delete");