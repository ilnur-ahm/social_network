import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReduser from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReducer,
});

let store = createStore(reducers);

export default store;