import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/config";
import ReactDOM from "react-dom";
import App from "./App";



let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                config={store.getState()}
                addMessage={store.onAddMessage.bind(store)}
                changeNewMessage={store.onChangeNewMessage.bind(store)}
                addPost={store.onAddPost.bind(store)}
                changeNewPost={store.onChangeNewPost.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderTree(store.getState())
store.subscriber(rerenderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
