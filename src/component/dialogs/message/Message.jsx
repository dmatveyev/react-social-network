import styles from "./../Dialogs.module.css";
import React from "react";

export const Message = (props) => {
    let userMessages = props.userMessage.message;

    return (
        <div className={styles.message}>{userMessages}</div>
    )
};
