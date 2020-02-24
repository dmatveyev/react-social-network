import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import dialogReducer from "./dialog-reducer";
import contentReducer from "./content-reducer";

let reducers = combineReducers({
    content: contentReducer,
    messages: dialogReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;