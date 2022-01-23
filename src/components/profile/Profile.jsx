import React from 'react';
import styles from './profile.module.css'
import MyPostsContainer from "./myPosts/MyPostsContainer";
import ProfileInfoContainer from "./profileInfo/ProfileInfoContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfoContainer/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;