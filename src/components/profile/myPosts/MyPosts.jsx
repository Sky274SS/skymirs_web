import React from 'react';
import styles from "./my_posts.module.css";
import Post from "./post/Post";


const MyPosts = (props) => {

    const addPost = () => {
        props.addPost(props.newPost)
        props.updateNewPostText(" ")
    }

    const createNewPost = (e) => {
        let post = e.target.value
        props.updateNewPostText(post)
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
                    <Post postText={element.postText}
                          likeCount={element.likeCount}
                          time={element.date}
                          key={id}
                          id={id}
                          addNewLike={props.addLike}
                          img={props.profile ? props.profile.img : ''}
                    />
                )
            })}
        </div>)

}


export default MyPosts;