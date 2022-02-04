import React from 'react';
import styles from "./post.module.css";

const Post = ({postText,likeCount,time,id,addNewLike,img}) => {
    window.time=time
    const onLike = ()=>{
        addNewLike(id)
    }
    const dateTransform = (date) =>{
        return `${date.slice(8,10)}.${date.slice(5,7)}.${date.slice(0,4)}`

    }

    return (
        <div className={styles.post}>
                <img src={img?img:''}
                     alt="ava"
                     className={styles.avaMicro}/>
                <div className={styles.postText}>
                    {postText}
                </div>
            <div className={styles.postEnd}>
                <div className={styles.like}>
                    {likeCount}
                    <img className={styles.likeImg}
                         src="https://cdn130.picsart.com/257533175015212.png"
                         alt="like"
                         onClick={onLike}/>
                </div>
                <div className={styles.postTime}>
                    {dateTransform(time)}
                </div>
            </div>

        </div>
    );
};

export default Post;