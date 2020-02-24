const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';

const contentReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostText,
                likes: 0
            };
            state.myPosts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
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