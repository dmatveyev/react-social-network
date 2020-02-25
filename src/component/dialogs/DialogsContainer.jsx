import Dialogs from "./Dialogs";
import {addMessageCreator, sendMessageCreator} from "../../redux/dialog-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsUsers: state.messages.dialogsUsers,
        dialogMessages: state.messages.dialogMessages,
        newMessageBody: state.messages.newMessageBody,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (event) => {
            let value = event.target.value;
            let action = addMessageCreator(value);
            dispatch(action);
        },
        addMessage: () => {
            const action = sendMessageCreator();
            dispatch(action);
        },
    }
};


let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer