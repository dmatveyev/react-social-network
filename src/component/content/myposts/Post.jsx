import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
    let ava = props.ava;
    return (
        <div className={styles.item}>
            <div>
                <img alt="" className={styles.ava} src={ava}/>
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