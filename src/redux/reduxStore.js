import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReduser";

let reducers = combineReducers({
    dialogs:dialogsReducer,
    profile:profileReducer,
    sidebar: sidebarReducer,
    usersPage:usersReducer
})
let store = createStore(reducers);

export default store