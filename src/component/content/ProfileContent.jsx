import React from "react";
import ProfileInfo from "./profileinfo/ProfileInfo";
import MyPostsContainer from "./myposts/MyPostsContainer";

const ProfileContent = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
};

export default ProfileContent