import {applyMiddleware, combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import dialogReducer from "./dialog-reducer";
import contentReducer from "./content-reducer";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk  from "redux-thunk"

let reducers = combineReducers({
    content: contentReducer,
    messages: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store=store;

export default store;