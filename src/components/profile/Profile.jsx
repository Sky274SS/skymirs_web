import React from 'react';
import styles from './profile.module.css'
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPosts from "./myPosts/MyPosts";
import Preloader from "../common/preloader/Preloader";



const Profile = (props) => {
    return (
        <>
            {props.isFetchingProfile? <Preloader/>: <div>
                {!props.state ? <div/> : <ProfileInfo state={props.state}/>}
                <MyPosts postData={props.postData}
                         newPost={props.newPost}
                         addLike={props.addLike}
                         updateNewPostText={props.updateNewPostText}
                         addPost={props.addPost}
                         profile={props.state}
                />
            </div>}

        </>
    );
};

export default Profile;