import React from 'react';
import styles from "./my_posts.module.css";
import Post from "./post/Post";


const MyPosts = (props) => {
    let newPostElement = React.createRef();

    const addPost = () => {
        props.addPost()
    }
    function createNewPost ()  {
        let post = newPostElement.current.value
        props.changeNewPost(post)
    }

    return (
        <div className={styles.postsArea}>
            <div className={styles.post}>
                <div>My Posts</div>
                <div>
                    <textarea
                        ref={newPostElement}
                        className={styles.textarea}
                        value={props.newPost}
                        onChange={createNewPost}
                    />
                </div>
                <div>
                    <button onClick={addPost} className={styles.button}>add post</button>
                </div>
            </div>
            {props.postData.map((element, id) => {
                return (
                    <Post postText={element.postText} likeCount={element.likeCount} key={id}/>
                )
            })}
        </div>
    );
};

export default MyPosts;