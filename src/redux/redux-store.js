import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import dialogReducer from "./dialog-reducer";
import contentReducer from "./content-reducer";
import userReducer from "./users-reducer";

let reducers = combineReducers({
    content: contentReducer,
    messages: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer
});

let store = createStore(reducers);

window.store=store;

export default store;