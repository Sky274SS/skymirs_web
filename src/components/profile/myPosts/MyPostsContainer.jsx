import React from 'react';
import MyPosts from "./MyPosts";
import {addLikeCreator, addPostCreater, updateNewPostTextCreater} from "../../../redux/profileReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        state: state.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => dispatch(addPostCreater()),
        updateNewPost: post => dispatch(updateNewPostTextCreater(post)),
        addNewLike: id => dispatch(addLikeCreator(id))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;