import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import notesReducer from "./notes/notes-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["notes"]
};

const rootReducer = combineReducers({
  notes: notesReducer,
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export default persistedRootReducer;
