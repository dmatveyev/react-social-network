const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageBody;
            return state;
        case SEND_MESSAGE:
            state.dialogMessages.push(
                {message: state.newMessageBody}
            );
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }
};

export default dialogReducer;

export const addMessageCreator = (text) =>
    ({
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessageBody: text
    });
export const sendMessageCreator = () =>
    ({
        type: SEND_MESSAGE
    });