import contentReducer from "./content-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogReducer from "./dialog-reducer";


let store = {
    _state: {
        messages: {
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
        },
        content: {
            infoDesc: {
                headerTheme: "https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg",
                description: "The coolest developer!!!!",
                ava: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
            },
            myPosts: [
                {message: "Hello!!!", likes: 5},
                {message: "What is your favorite singer?", likes: 33},
            ],
            newPostText: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State has been changed!!!')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.content = contentReducer(this._state.content, action);
        this._state.messages = dialogReducer(this._state.messages, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state)
    }
};

export default store;