import React from 'react';
import styles from './profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postData={props.config.postData}
                addPost={props.addPost}
                changeNewPost={props.changeNewPost}
                newPost={props.config.newPost}
            />
        </div>
    );
};

export default Profile;