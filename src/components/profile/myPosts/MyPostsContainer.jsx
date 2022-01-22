import React from 'react';
import MyPosts from "./MyPosts";
import {addLikeCreator, addPostCreater, updateNewPostTextCreater} from "../../../redux/profileReducer";

const MyPostsContainer = (props) => {

    const state = props.store.getState().profile

    const addNewPost = () => {
        props.store.dispatch(addPostCreater())
    }
    const updateNewPost = (post) => {
        props.store.dispatch(updateNewPostTextCreater(post))
    }
    const addNewLike = (id)=>{
        props.store.dispatch(addLikeCreator(id))
    }


    return (
       <MyPosts
           state={state}
           addNewPost={addNewPost}
           updateNewPost={updateNewPost}
           addNewLike={addNewLike} />
    );
};

export default MyPostsContainer;