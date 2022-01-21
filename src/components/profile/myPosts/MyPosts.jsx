import React from 'react';
import styles from "./my_posts.module.css";
import Post from "./post/Post";
import {addPostCreater, updateNewPostTextCreater} from "../../../redux/profileReducer";


const MyPosts = (props) => {

    const addPost = () => {
        props.dispatch(addPostCreater())
    }
    function createNewPost (e)  {
        let post = e.target.value
        props.dispatch(updateNewPostTextCreater(post))
    }

    return (
        <div className={styles.postsArea}>
            <div className={styles.post}>
                <div className={styles.myPosts}>My Posts</div>
                <div>
                    <textarea
                        className={styles.textarea}
                        value={props.newPost}
                        onChange={createNewPost}
                        placeholder={'Enter your text'}
                    />
                </div>
                <div>
                    <button onClick={addPost} className={styles.button}>add post</button>
                </div>
            </div>
            {props.postData.map((element, id) => {
                return (
                    <Post postText={element.postText} likeCount={element.likeCount} time={element.time} key={id}/>
                )
            })}
        </div>
    );
};

export default MyPosts;