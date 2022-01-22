import React from 'react';
import styles from "./my_posts.module.css";
import Post from "./post/Post";


const MyPosts = (props) => {

    const addPost = () => {
        props.addNewPost()
    }

    function createNewPost(e) {
        let post = e.target.value
        props.updateNewPost(post)
    }

    return (
        <div className={styles.postsArea}>
            <div className={styles.post}>
                <div className={styles.myPosts}>My Posts</div>
                <div>
                    <textarea
                        className={styles.textarea}
                        value={props.state.newPost}
                        onChange={createNewPost}
                        placeholder={'Enter your text'}
                    />
                </div>
                <div>
                    <button onClick={addPost} className={styles.button}>add post</button>
                </div>
            </div>
            {props.state.postData.map((element, id) => {
                return (
                    <Post postText={element.postText}
                          likeCount={element.likeCount}
                          time={element.time}
                          key={id}
                          id={id}
                          addNewLike={props.addNewLike}/>
                )
            })}
        </div>
    );
};

export default MyPosts;