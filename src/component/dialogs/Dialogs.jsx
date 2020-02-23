import React from "react";
import styles from "./Dialogs.module.css"
import {Message} from "./message/Message";
import {DialogItem} from "./dialogitem/DialogItem";

const Dialogs = (props) => {

    let dialogsData = props.dialogsUsers;
    let messagesData = props.dialogMessages

    let dialogElements = dialogsData.map(userData => <DialogItem userName={userData.name} conv_id={userData.id}/>);
    let messagesElements = messagesData.map(message => <Message userMessage={message}/>);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs