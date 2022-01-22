import React from 'react';
import styles from './dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";


const Dialogs = (props) => {

    const addMessage = () => {
        props.addNewMessage()
    }
    const createNewMessage = (e) => {
        let newMessage = e.target.value
        props.updateNewMessage(newMessage)
    }

    return (
        <div className={styles.container}>
            <div className={styles.dialogItem}>
                {props.state.dialogsData.map((element, id) => {
                    return (
                        <DialogItem
                            name={element.name}
                            id={id}
                            key={id}
                            img={element.img}/>
                    )
                })}
            </div>
            <div className={styles.message}>
                <div className={styles.messageInfo}>
                    {props.state.messageData.map((element, id) => {
                        return (
                            <Message
                                message={element.message}
                                isFriend={element.isFriend}
                                key={id}/>
                        )
                    })}
                </div>
                <div className={styles.addMessage}>
                    <div>
                        <textarea
                            className={styles.textarea}
                            value={props.state.newMessage}
                            onChange={createNewMessage}
                        />
                    </div>
                    <div>
                        <button
                            className={styles.button}
                            onClick={addMessage}>send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;