import React from "react";
import Post from "./Post";
import styles from "./MyPosts.module.css"

const MyPosts = (props) => {

    let newPostElem = React.createRef();
    let myPosts = props.posts;
    let posts = myPosts.map(p => <Post ava={props.ava} message={p.message} likeCount={p.likes}/>);


    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElem.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={styles.posts}>
            <h3 className={styles.posts_header}>My Posts</h3>
            <div className={styles.new_post}>
                <div>
                    <textarea placeholder="Add new post" ref={newPostElem} onChange={onPostChange}
                              value={props.newPost}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={styles.my_posts}>
                {posts}
            </div>
        </div>
    )
};


export default MyPosts