import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import config, {onAddMessage, onAddPost, onChangeNewMessage, onChangeNewPost, subscriber} from "./redux/config";
import ReactDOM from "react-dom";
import App from "./App";


let rerenderTree = (config) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                config={config}
                addMessage={onAddMessage}
                addPost={onAddPost}
                changeNewMessage={onChangeNewMessage}
                changeNewPost={onChangeNewPost}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderTree(config)
subscriber(rerenderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
