import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/content-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    let content = state.content;
    return {
        ava: content.infoDesc.ava,
        posts: content.myPosts,
        newPostText: content.newPostText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
};
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostContainer