import React from "react";
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom"

const DialogItem = (props) => {
    let path = "/dialogs/" + props.conv_id;
    return (
        <div className={styles.dialog}>
            <NavLink to={path}>
                {props.userName}
            </NavLink>
        </div>
    )
};

const Message = (props) => {

    return (
        <div className={styles.message}>{props.userMessage}</div>
    )
};

const Dialogs = (props) => {

    let dialogsData = //props.dialogsData;
        [
            {id: 1, name: "Den"},
            {id: 2, name: "Julia"},
            {id: 3, name: "Helga"},
            {id: 4, name: "Helen"},
        ];

    let messagesData = [
        {message:"Hi"},
        {message:"Who ara you?"},
        {message:"WTF?!?!?!?"},
    ];

    return (

        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                <DialogItem userName={dialogsData[0].name}
                            conv_id= {dialogsData[0].id}/>
                <DialogItem userName={dialogsData[1].name}
                            conv_id= {dialogsData[1].id}/>
                <DialogItem userName={dialogsData[2].name}
                            conv_id= {dialogsData[2].id}/>
                <DialogItem userName={dialogsData[3].name}
                            conv_id= {dialogsData[3].id}/>
            </div>
            <div className={styles.messages}>
                <Message userMessage={messagesData[0].message}/>
                <Message userMessage={messagesData[1].message}/>
                <Message userMessage={messagesData[2].message}/>

            </div>
        </div>
    )
};

export default Dialogs