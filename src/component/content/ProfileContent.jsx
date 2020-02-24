import React from "react";
import ProfileInfo from "./profileinfo/ProfileInfo";
import MyPostsContainer from "./myposts/MyPostsContainer";
import StoreContext from "../../redux/store-context";


const ProfileContent = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
};

export default ProfileContent