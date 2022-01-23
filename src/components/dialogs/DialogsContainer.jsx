import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageCreater, updateNewMessageTextCreater} from "../../redux/dialogsReducer";
import {connect} from "react-redux";

const mapStatechToProps = (state) => {
    return {
        state: state.dialogs
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addMessageCreater())
        },
        updateNewMessage: (newMessage) => {
            dispatch(updateNewMessageTextCreater(newMessage))
        }
    }
}

const DialogsContainer = connect(mapStatechToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;