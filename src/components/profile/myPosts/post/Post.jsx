import React from 'react';
import styles from "./post.module.css";

const Post = ({postText,likeCount,time}) => {
    return (
        <div className={styles.post}>
                <img src="https://coolsen.ru/wp-content/uploads/2021/06/186-2.jpg"
                     alt="ava"
                     className={styles.avaMicro}/>
                <div className={styles.postText}>{postText}</div>
            <div className={styles.postEnd}>
                <div className={styles.like}>
                    {likeCount}
                    <img className={styles.likeImg} src="https://cdn130.picsart.com/257533175015212.png" alt="like"/>
                </div>
                <div className={styles.postTime}>{time}</div>
            </div>

        </div>
    );
};

export default Post;