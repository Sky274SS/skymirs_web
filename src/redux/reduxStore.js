import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReduser";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    dialogs:dialogsReducer,
    profilePage:profileReducer,
    sidebar: sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer
})
let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store=store.getState().auth
export default store