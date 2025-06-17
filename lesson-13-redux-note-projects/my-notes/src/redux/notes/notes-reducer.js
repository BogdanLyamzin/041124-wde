import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from "./notes-types";

const notesReducer = (store = [], { type, payload }) => {
  switch (type) {
    case ADD_NOTE:
      return [...store, payload];
    case EDIT_NOTE:
      const copyStore = [...store];
      const idx = copyStore.findIndex((item) => item.id === payload.id);
      copyStore[idx] = payload;
      return copyStore;
    case DELETE_NOTE:
      return store.filter((item) => item.id !== payload);
    default:
      return store;
  }
};

export default notesReducer;
