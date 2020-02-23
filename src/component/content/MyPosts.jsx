import React from "react";
import Post from "./Post";
import styles from "./ProfileContent.module.css"

const MyPosts = (props) => {
    return (
        <div className={styles.posts}>
            <div className="newPost">
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className="posts">
                <Post message="Hello!" likeCount="5"/>
                <Post message="WTF?????" likeCount ="33"/>
            </div>
        </div>
    )
};


export default MyPosts