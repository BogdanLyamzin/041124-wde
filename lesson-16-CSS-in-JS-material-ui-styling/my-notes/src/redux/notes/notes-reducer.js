import { ADD_NOTE, EDIT_NOTE, TOGGLE_IMPORTANT_NOTE, DELETE_NOTE } from "./notes-types";

const notesReducer = (store = [], { type, payload }) => {
  switch (type) {
    case ADD_NOTE:
      return [...store, payload];

    case EDIT_NOTE:
      const copyStore = structuredClone(store);
      const idx = copyStore.findIndex((item) => item.id === payload.id);
      copyStore[idx] = payload;
      return copyStore;

    case TOGGLE_IMPORTANT_NOTE:
      const duplicateStore = structuredClone(store);
      const note = duplicateStore.find((item) => item.id === payload);
      note.important = !note.important;
      return duplicateStore;

    case DELETE_NOTE:
      return store.filter((item) => item.id !== payload);
      
    default:
      return store;
  }
};

export default notesReducer;
