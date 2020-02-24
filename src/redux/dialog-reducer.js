const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsUsers: [
        {id: 1, name: "Den", ava: "https://klike.net/uploads/posts/2019-03/1551511823_2.jpg"},
        {id: 2, name: "Julia", ava: "https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg"},
        {id: 3, name: "Helga", ava: "https://klike.net/uploads/posts/2019-03/1551511808_5.jpg"},
        {id: 4, name: "Helen", ava: "https://klike.net/uploads/posts/2019-03/medium/1551511789_7.jpg"},
    ],
    dialogMessages: [
        {message: "Hi"},
        {message: "Who are you?"},
        {message: "WTF?!?!?!?"}],
    newMessageBody: ""
};

const dialogReducer = (state = initialState, action) => {
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