import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReduser";
import authReducer from "./authReducer";

let reducers = combineReducers({
    dialogs:dialogsReducer,
    profilePage:profileReducer,
    sidebar: sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer
})
let store = createStore(reducers);
window.store=store.getState().auth
export default store