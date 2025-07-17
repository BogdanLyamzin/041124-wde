import {configureStore} from "@reduxjs/toolkit";

import notesReducer from "./notes/notes-reducer";

export const store = configureStore({
    reducer: {
        notes: notesReducer
    }
});
