import { legacy_createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

import rootReducer from "./root-reducer";

const enchancer = devToolsEnhancer();

const store = legacy_createStore(rootReducer, enchancer);
/*
 const legacy_createStore = (reducer)=> {
    const newStore = reducer();
    return newStore;
 }
 */

 export default store;