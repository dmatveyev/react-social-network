import styles from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export const DialogItem = (props) => {
    let dialogsUsers = props.dialogData;
    let path = "/dialogs/" + dialogsUsers.id;
    return (
        <div className={styles.dialog}>
            <NavLink to={path}>
                <div>
                    <img className={styles.dialog_ava} src={dialogsUsers.ava}/>
                </div>
                {dialogsUsers.name}
            </NavLink>
        </div>
    )
};

