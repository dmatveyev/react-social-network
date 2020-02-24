const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';

let initialState = {
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
};

const contentReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                myPosts: [...state.myPosts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
};

export default contentReducer;

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    });