import React from "react";
import styles from './ProfileContent.module.css';
import MyPosts from "./MyPosts";


const ProfileContent = (props) => {
    return (
        <div className={styles.profile}>
            <div>
                <img alt="" src="https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg"/>
            </div>
            <div>
                ava desc
            </div>
            <MyPosts/>
        </div>)
};

export default ProfileContent