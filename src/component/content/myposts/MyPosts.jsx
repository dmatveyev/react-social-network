import React from "react";
import Post from "./Post";
import styles from "./MyPosts.module.css"

const MyPosts = (props) => {

    let newPostElem = React.createRef();

    let myPosts = props.myPosts;
    let posts = myPosts.map(p => <Post ava={props.ava} message={p.message} likeCount={p.likes}/>);

    let clicked = () => {
        alert(newPostElem.current.value);
    };

    return (
        <div className={styles.posts}>
            <h3 className={styles.posts_header}>My Posts</h3>
            <div className={styles.new_post}>
                <div>
                    <textarea ref={newPostElem}></textarea>
                </div>
                <div>
                    <button onClick={clicked}>Add post</button>
                </div>
            </div>
            <div className={styles.my_posts}>
                {posts}
            </div>
        </div>
    )
};


export default MyPosts