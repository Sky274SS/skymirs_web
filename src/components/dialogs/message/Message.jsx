import React from 'react';
import styles from './message.module.css'

const Message = (props) => {
    return (
        <div className={styles.container}>
            {props.isFriend ?
                <div className={`${styles.dialog} ${styles.friendDialog}`}>
                    <div className={styles.dialogElement}>
                        <img src="https://a.d-cd.net/1a424f2s-960.jpg"
                             alt="friend_ava"
                             className={styles.img}/>
                        Alex:</div>
                    <div>{props.message}</div>
                </div>
                : <div className={`${styles.dialog} ${styles.selfDialog}`}>
                    <div>{props.message}</div>
                    <div className={styles.dialogElement}> Me:
                        <img src={props.img?props.img:''}
                             alt="self_ava"
                             className={styles.img}/>
                    </div>
                </div>
            }
        </div>
    );
};

export default Message;