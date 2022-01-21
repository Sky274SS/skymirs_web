import React from 'react';
import styles from './profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                profileInfo={props.config.profileInfo}
            />
            <MyPosts
                dispatch={props.dispatch}
                newPost={props.config.newPost}
                postData={props.config.postData}
            />
        </div>
    );
};

export default Profile;