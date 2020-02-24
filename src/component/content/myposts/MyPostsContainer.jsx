import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/content-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../redux/store-context";

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let addPost = () => {
                        let action = addPostActionCreator();
                        store.dispatch(action);
                    };

                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    };
                    let content = store.getState().content;
                    return (
                        <MyPosts ava={content.infoDesc.ava}
                                 updateNewPostText={onPostChange}
                                 addPost={addPost}
                                 posts={content.myPosts}
                                 newPostText={content.newPostText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
};


export default MyPostsContainer