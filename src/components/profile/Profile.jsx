import React from 'react';
import styles from './profile.module.css'
import MyPostsContainer from "./myPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                profileInfo={props.store.getState().profile.profileInfo}
            />
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
};

export default Profile;