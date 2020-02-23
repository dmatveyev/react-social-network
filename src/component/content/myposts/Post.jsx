import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={styles.item}>
            <div>
                <img alt="" className={styles.ava} src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"/>
                <text className={styles.label}>{props.message}</text>
            </div>
            <div>
                <span className="like">like</span>
                <span className="count">{`(${props.likeCount})`}</span>
            </div>
        </div>
    )
};


export default Post