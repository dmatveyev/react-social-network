const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';

let store = {
    _state: {
        messages: {
            dialogsUsers: [
                {id: 1, name: "Den", ava: "https://klike.net/uploads/posts/2019-03/1551511823_2.jpg"},
                {id: 2, name: "Julia", ava: "https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg"},
                {id: 3, name: "Helga", ava: "https://klike.net/uploads/posts/2019-03/1551511808_5.jpg"},
                {id: 4, name: "Helen", ava: "https://klike.net/uploads/posts/2019-03/medium/1551511789_7.jpg"},
                {id: 4, name: "Helen", ava: "https://klike.net/uploads/posts/2019-03/medium/1551511789_7.jpg"},
            ],
            dialogMessages: [
                {message: "Hi"},
                {message: "Who are you?"},
                {message: "WTF?!?!?!?"}]
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
            newPostText: "Some posts!!!"
        }
    },
    _rerenderEntireTree() {
        console.log('State has been changed!!!')
    },
    _addPost() {
        let newPost = {
            message: this._state.content.newPostText,
            likes: 0
        };
        this._state.content.myPosts.push(newPost);
        this._updateNewPostText('');
        this._rerenderEntireTree(this._state);
    },
    _updateNewPostText(newText) {
        this._state.content.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                this._addPost();
                break;
            case UPDATE_NEW_POST_TEXT:
                this._updateNewPostText(action.newText);
                break;
            default:
                console.log('Action not supported!!')
        }
    }
};
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    });

export default store;