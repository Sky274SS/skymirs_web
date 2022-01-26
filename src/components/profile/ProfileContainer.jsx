import React from 'react'
import {connect} from "react-redux";
import {addLike, addPost, getProfile, toggleIsFetchingProfile, updateNewPostText} from "../../redux/profileReducer";
import Profile from "./Profile";
import * as axios from "axios";
import {useMatch} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetchingProfile(true)
        let userId = this.props.userId? this.props.userId:this.props.currentUser

        axios.get(`https://otdelka-krd.ru/api/profile/${userId}`)
            .then(response => {
                this.props.toggleIsFetchingProfile(false)
                this.props.getProfile(response.data)
            })
    }


    render() {

        return (
            <Profile {...this.props} state={this.props.state}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.profilePage.profile,
        postData: state.profilePage.postData,
        newPost: state.profilePage.newPost,
        currentUser: state.usersPage.currentUser,
        isFetchingProfile: state.profilePage.isFetchingProfile
    }
}

const ProfileContainerURL = (props)=>{
    const match = useMatch('/profile/:id');
return(
    <ProfileContainer  {...props} userId={match?match.params.id:props.currentUser} />
)
}

export default connect(mapStateToProps,
    {getProfile, addPost, updateNewPostText, addLike, toggleIsFetchingProfile})
(ProfileContainerURL)