import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let data =
    {
        dialog: {
            dialogsUsers: [
                {id: 1, name: "Den"},
                {id: 2, name: "Julia"},
                {id: 3, name: "Helga"},
                {id: 4, name: "Helen"}],
            dialogMessages: [
                {message: "Hi"},
                {message: "Who are you?"},
                {message: "WTF?!?!?!?"}]
        },
        content: {
            infoDesc: {
                headerTheme: "https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg",
                description: "The coolest developer!!!!"
            },
            myPosts: [
                {message: "Hello!!!", likes: 5},
                {message: "What is your favorite singer?", likes: 33},
            ]
        }
    };

let infoDesc = {
    headerTheme: "https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg",
    description: "The coolest developer!!!!"
};

ReactDOM.render(<App data={data}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
