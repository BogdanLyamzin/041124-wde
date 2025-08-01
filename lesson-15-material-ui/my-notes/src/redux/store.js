import { legacy_createStore } from "redux";
import { persistStore } from "redux-persist";
import { devToolsEnhancer } from "@redux-devtools/extension";

import rootReducer from "./rootReducer";

const enchancer = devToolsEnhancer();

export const store = legacy_createStore(rootReducer, enchancer);

export const persistor = persistStore(store);