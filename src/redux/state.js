export const addPost = () => {
    let newPost = {
        message: state.content.newPostText,
        likes: 0
    };
    state.content.myPosts.push(newPost);
    updateNewPostText('');
    rerenderEntireTree(state);
};

let rerenderEntireTree = () => {
    console.log('State has been changed!!!')
};

export const updateNewPostText = (newText) => {
    state.content.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

export let state = {
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
    },
    functions: {
        updateNewPostText: updateNewPostText,
        addPost: addPost
    }

};

export default state;