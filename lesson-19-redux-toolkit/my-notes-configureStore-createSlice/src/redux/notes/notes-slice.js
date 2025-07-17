import { createSlice, nanoid } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    addNote: {
      reducer: (store, { payload }) => [...store, payload],
      prepare: (data) => ({
        payload: {
          id: nanoid(),
          ...data,
        },
      }),
    },
    editNote: (store, { payload }) => {
      const idx = store.findIndex((item) => item.id === payload.id);
      store[idx] = payload;
    },
    toggleNoteImportant: (store, { payload }) => {
      const note = store.find((item) => item.id === payload);
      note.important = !note.important;
    },
    deleteNote: (store, { payload }) =>
      store.filter((item) => item.id !== payload),
  },
});

export const { addNote, editNote, toggleNoteImportant, deleteNote } =
  notesSlice.actions;

export default notesSlice.reducer;
