import React from 'react'
import {connect} from "react-redux";
import {
    addLike,
    addPost,
    getPosts,
    getProfile,
    toggleIsFetchingProfile,
    updateNewPostText
} from "../../redux/profileReducer";
import Profile from "./Profile";
import * as axios from "axios";
import {useMatch} from "react-router-dom";

class ProfileContainer extends React.Component {


    componentDidMount() {
        let data =  JSON.parse(localStorage.getItem('userData'))
        this.props.toggleIsFetchingProfile(true)
        let userId = this.props.userId? this.props.userId:this.props.currentUser

        axios.get(`/api/profile/me`,{headers: {"Authorization": `Bearer ${data.token}`}})
            .then(response => {
                this.props.toggleIsFetchingProfile(false)
                this.props.getProfile(response.data.profile[0])
            })
        axios.get('/api/posts/me',{headers: {"Authorization": `Bearer ${data.token}`}})
            .then(response => {
                this.props.getPosts(response.data.posts)
            })
    }

    addNewPost(postText){
        let data =  JSON.parse(localStorage.getItem('userData'))
        axios.post('/api/posts/',{postText},{headers: {"Authorization": `Bearer ${data.token}`}}).then (response=>{
            axios.get('/api/posts/me',{headers: {"Authorization": `Bearer ${data.token}`}})
                .then(response => {
                    console.log(response.data.posts)
                    // this.props.getPosts(response.data.posts)
                })
        }).catch((error)=>{console.log(error)})

    }


    render() {

        return (
            <Profile {...this.props} state={this.props.state} addPost={this.addNewPost}/>
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
    {getProfile,getPosts,  updateNewPostText, addLike, toggleIsFetchingProfile})
(ProfileContainerURL)