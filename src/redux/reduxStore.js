import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    dialogs:dialogsReducer,
    profile:profileReducer,
    sidebar: sidebarReducer
})
let store = createStore(reducers);

export default store