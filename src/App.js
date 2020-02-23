import React from 'react';
import Header from "./component/header/Header";
import Navbar from "./component/navbar/Navbar";
import ProfileContent from "./component/content/ProfileContent"
import Dialogs from "./component/dialogs/Dialogs";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./component/news/News";
import Music from "./component/music/Music";
import Settings from "./component/settings/Settings";

const App = (props) => {
    let messages = props.state.messages;
    let content = props.state.content;

    function getProfile(content, addPost, updateNewPostText) {
        return () => <ProfileContent content={content}
                                     addPost={addPost}
                                     updateNewPostText={updateNewPostText}/>;
    }

    const getDialogs = (messages) => {
        return () => <Dialogs messages={messages}/>
    };

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile" component={getProfile(content,
                    props.addPost, props.updateNewPostText)}/>
                <Route path="/dialogs" component={getDialogs(messages)}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
};

export default App;
