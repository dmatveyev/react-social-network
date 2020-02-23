import styles from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export const DialogItem = (props) => {
    let path = "/dialogs/" + props.conv_id;
    return (
        <div className={styles.dialog}>
            <NavLink to={path}>
                {props.userName}
            </NavLink>
        </div>
    )
};

