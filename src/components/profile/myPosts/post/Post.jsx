import React from 'react';
import styles from "./post.module.css";

const Post = ({postText,likeCount}) => {
    return (
        <div className={styles.post}>
            <div className={styles.newPost}>
                <img src="https://coolsen.ru/wp-content/uploads/2021/06/186-2.jpg"
                     alt="ava"
                     className={styles.avaMicro}/>
                <div>{postText}</div>
            </div>
            <div className={styles.like}>{likeCount} likes</div>
        </div>
    );
};

export default Post;