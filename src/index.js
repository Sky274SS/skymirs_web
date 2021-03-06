import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/reduxStore";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import LoginContainer from "./login/LoginContainer";




let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                {localStorage.userData? <App/>:
                    <LoginContainer/>}
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
