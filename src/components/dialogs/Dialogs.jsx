import React from 'react';
import styles from './dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.dialogItem}>
                <DialogItem name={'Alex'} id={1}/>
                <DialogItem name={'Helen'} id={2}/>
                <DialogItem name={'Dmitry'} id={3}/>
            </div>

            <div className={styles.message}>
                <Message message={'Hi!'}/>
                <Message message={'I am using React-js'}/>
                <Message message={'How are you?'}/>
            </div>
        </div>
    );
};

export default Dialogs;