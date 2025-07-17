import { createReducer } from "@reduxjs/toolkit";

import {
  addNote,
  editNote,
  toggleNoteImportant,
  deleteNote,
} from "./notes-actions";

const notesReducer = createReducer([], (builder) => {
  builder
    .addCase(addNote, (store, { payload }) => [...store, payload])
    .addCase(editNote, (store, { payload }) => {
      const idx = store.findIndex((item) => item.id === payload.id);
      store[idx] = payload;
    })
    .addCase(toggleNoteImportant, (store, { payload }) => {
      const note = store.find((item) => item.id === payload);
      note.important = !note.important;
    })
    .addCase(deleteNote, (store, { payload }) =>
      store.filter((item) => item.id !== payload)
    );
});

export default notesReducer;
