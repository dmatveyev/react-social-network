import React from "react";
import Post from "./Post";
import styles from "./MyPosts.module.css"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let newPostElem = React.createRef();
    let myPosts = props.myPosts;
    let posts = myPosts.map(p => <Post ava={props.ava} message={p.message} likeCount={p.likes}/>);

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElem.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className={styles.posts}>
            <h3 className={styles.posts_header}>My Posts</h3>
            <div className={styles.new_post}>
                <div>
                    <textarea ref={newPostElem} onChange={onPostChange} value={props.newPost}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={styles.my_posts}>
                {posts}
            </div>
        </div>
    )
};


export default MyPosts