import React from "react";
import styles from './ProfileContent.module.css';
import MyPosts from "./myposts/MyPosts";
import ProfileInfo from "./profileinfo/ProfileInfo";


const ProfileContent = (props) => {
    let myPosts = props.content.myPosts;
    let infoDesc = props.content.infoDesc;

    return (
        <div className={styles.profile}>
            <ProfileInfo infoDesc={infoDesc}/>
            <MyPosts ava={infoDesc.ava} myPosts={myPosts}
                     dispatch={props.dispatch}
                     newPost={props.content.newPostText}/>
        </div>)
};

export default ProfileContent