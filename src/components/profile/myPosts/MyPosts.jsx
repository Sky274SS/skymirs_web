import React from 'react';
import styles from "./my_posts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div className={styles.postsArea}>
            <div className={styles.post}>
                <div>My Posts</div>
                <div><textarea></textarea></div>
                <div><button>add post</button></div>
            </div>
            <Post postText={'hello world'} likeCount={10}/>
            <Post postText={'i am learn react'} likeCount={15}/>
            <Post postText={'second day'} likeCount={345}/>
        </div>
    );
};

export default MyPosts;