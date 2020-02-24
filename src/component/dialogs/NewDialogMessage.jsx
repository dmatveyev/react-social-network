import React from "react";

export const NewMessage = (props) => {
    let onChangeValue = (event) => {
        props.updateNewMessageBody(event);
    };

    let sendMessage = () => {
        props.addMessage();
    };

    return (
        <div>
            <div>
                <textarea placeholder="Add new message"
                          onChange={onChangeValue}
                          value={props.newMessageBody}/>
            </div>
            <button onClick={sendMessage}>Send</button>
        </div>
    )
};