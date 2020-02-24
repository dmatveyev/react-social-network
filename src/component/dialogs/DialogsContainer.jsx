import React from "react";
import Dialogs from "./Dialogs";
import {addMessageCreator, sendMessageCreator} from "../../redux/dialog-reducer";
import StoreContext from "../../redux/store-context";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();
                let dialogsData = state.messages.dialogsUsers;
                let messagesData = state.messages.dialogMessages;
                let newMessageBody = state.messages.newMessageBody

                let onChangeValue = (event) => {
                    let value = event.target.value;
                    let action = addMessageCreator(value);
                    store.dispatch(action);
                };

                let onAddMessage = () => {
                    const action = sendMessageCreator();
                    store.dispatch(action);
                };
                return (
                    <Dialogs dialogsUsers={dialogsData}
                             dialogMessages={messagesData}
                             newMessageBody={newMessageBody}
                             addMessage={onAddMessage}
                             updateNewMessageBody={onChangeValue}/>)
            }
        }
        </StoreContext.Consumer>
    )

};

export default DialogsContainer