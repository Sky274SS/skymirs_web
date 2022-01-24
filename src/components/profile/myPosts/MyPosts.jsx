import React from 'react';
import styles from "./my_posts.module.css";
import Post from "./post/Post";

class MyPosts extends React.Component{

    addPost = () => {
        this.props.addNewPost()
    }
    createNewPost = (e) => {
        let post = e.target.value
        this.props.updateNewPost(post)
        console.log(post)
    }
    render(){
        return (
            <div className={styles.postsArea}>
                <div className={styles.post}>
                    <div className={styles.myPosts}>My Posts</div>
                    <div>
                    <textarea
                        className={styles.textarea}
                        value={this.props.state.newPost}
                        onChange={this.createNewPost}
                        placeholder={'Enter your text'}
                    />
                    </div>
                    <div>
                        <button onClick={this.addPost} className={styles.button}>add post</button>
                    </div>
                </div>
                {this.props.state.postData.map((element, id) => {
                    return (
                        <Post postText={element.postText}
                              likeCount={element.likeCount}
                              time={element.time}
                              key={id}
                              id={id}
                              addNewLike={this.props.addNewLike}/>
                    )
                })}
            </div>
        );
    }
}

export default MyPosts;