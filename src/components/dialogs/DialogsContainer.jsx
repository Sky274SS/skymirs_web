import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageCreater, updateNewMessageTextCreater} from "../../redux/dialogsReducer";

const DialogsContainer = (props) => {

    const state = props.store.getState().dialogs

    const addNewMessage = () => {
        props.store.dispatch(addMessageCreater())
    }
    const updateNewMessage = (newMessage) => {
        props.store.dispatch(updateNewMessageTextCreater(newMessage))
    }

    return <Dialogs
        state={state}
        addNewMessage={addNewMessage}
        updateNewMessage={updateNewMessage}/>
};

export default DialogsContainer;