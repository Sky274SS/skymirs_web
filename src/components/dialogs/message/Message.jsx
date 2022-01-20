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
                    <div>
                        <img src="https://coolsen.ru/wp-content/uploads/2021/06/186-2.jpg"
                             alt="self_ava"
                             className={styles.img}/>
                    </div>
                </div>
            }
        </div>
    );
};

export default Message;