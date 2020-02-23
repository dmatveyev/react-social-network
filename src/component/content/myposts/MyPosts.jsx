import React from "react";
import Post from "./Post";
import styles from "./MyPosts.module.css"

const MyPosts = (props) => {

    let myPosts = props.myPosts;
    return (
        <div className={styles.posts}>
            <h3 className={styles.posts_header}>My Posts</h3>
            <div className={styles.new_post}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={styles.my_posts}>
                <Post message={myPosts[0].message} likeCount={myPosts[0].likes}/>
                <Post message={myPosts[1].message} likeCount={myPosts[1].likes}/>
            </div>
        </div>
    )
};


export default MyPosts