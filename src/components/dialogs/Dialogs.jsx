import React from 'react';
import styles from './dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";


const Dialogs = (props) => {

    let newMessageElement = React.createRef()

    const addMessage = () => {
        let newMessage = newMessageElement.current.value
        props.addMessage(newMessage)
    }
    const createNewMessage = () => {
        let newMessage = newMessageElement.current.value
        props.changeNewMessage(newMessage)
    }

    return (
        <div className={styles.container}>
            <div className={styles.dialogItem}>
                {props.config.dialogsData.map((element, id) => {
                    return (
                        <DialogItem name={element.name} id={id} key={id} img={element.img}/>
                    )
                })}
            </div>
            <div className={styles.message}>
                <div>
                    {props.config.messageData.map((element, id) => {
                        return (
                            <Message message={element.message} isFriend={element.isFriend} key={id}/>
                        )
                    })}
                </div>
                <div className={styles.addMessage}>
                    <div>
                        <textarea
                            ref={newMessageElement}
                            className={styles.textarea}
                            value={props.config.newMessage}
                            onChange={createNewMessage}
                        />
                    </div>
                    <div>
                        <button className={styles.button} onClick={addMessage}>add Message</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dialogs;