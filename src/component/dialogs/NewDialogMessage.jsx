import React from "react";
import {addMessageCreator, sendMessageCreator} from "../../redux/dialog-reducer";

export const NewMessage = (props) => {

    let onChangeValue = (event) => {
        let value = event.target.value;
        let action = addMessageCreator(value);
        props.dispatch(action);
    };

    let sendMessage = () => {
        const action = sendMessageCreator();
        props.dispatch(action);
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