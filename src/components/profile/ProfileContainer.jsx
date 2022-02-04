import React from 'react'
import {connect} from "react-redux";
import {
    addLike,
    addPostThunk,
    getPosts,
    getProfileInfo,
    toggleIsFetchingProfile,
    updateNewPostText
} from "../../redux/profileReducer";
import Profile from "./Profile";
import * as axios from "axios";
import {useMatch} from "react-router-dom";
import {ProfileAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
       this.props.getProfileInfo()
    }




    render() {
        return (
            <Profile {...this.props} state={this.props.state} addPost={this.props.addPostThunk}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.profilePage.profile,
        postData: state.profilePage.posts,
        newPost: state.profilePage.newPost,
        currentUser: state.usersPage.currentUser,
        isFetchingProfile: state.profilePage.isFetchingProfile,
    }
}

const ProfileContainerURL = (props)=>{
    const match = useMatch('/profile/:id');
return(
    <ProfileContainer  {...props} userId={match?match.params.id:props.currentUser} />
)
}

export default connect(mapStateToProps,
    {getProfileInfo,getPosts, addPostThunk, updateNewPostText, addLike, toggleIsFetchingProfile})
(ProfileContainerURL)