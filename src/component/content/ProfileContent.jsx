import React from "react";
import styles from './ProfileContent.module.css';
import MyPosts from "./myposts/MyPosts";
import ProfileInfo from "./profileinfo/ProfileInfo";



const ProfileContent = (props) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo />
            <MyPosts/>
        </div>)
};

export default ProfileContent