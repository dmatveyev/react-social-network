import React from "react";
import styles from "./Dialogs.module.css"
import {Message} from "./message/Message";
import {DialogItem} from "./dialogitem/DialogItem";
import {NewMessage} from "./NewDialogMessage";

const Dialogs = (props) => {
    let dialogsData = props.messages.dialogsUsers;
    let messagesData = props.messages.dialogMessages;

    let dialogElements = dialogsData.map(userData => <DialogItem dialogData={userData}/>);
    let messagesElements = messagesData.map(message => <Message userMessage={message}/>);


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                <NewMessage newMessageBody={props.messages.newMessageBody} dispatch={props.dispatch}/>

                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs