import React from 'react';
import Header from "./component/header/Header";
import Navbar from "./component/navbar/Navbar";
import ProfileContent from "./component/content/ProfileContent"
import Dialogs from "./component/dialogs/Dialogs";
import './App.css';
import {Route} from "react-router-dom";
import News from "./component/news/News";
import Music from "./component/music/Music";
import Settings from "./component/settings/Settings";

const App = (props) => {
    let messages = props.state.messages;
    let content = props.state.content;

    function getProfile(content, dispatch) {
        return () => <ProfileContent content={content}
                                     dispatch={dispatch}/>;
    }

    const getDialogs = (messages, dispatch) => {
        return () => <Dialogs messages={messages} dispatch={dispatch}/>
    };

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={getProfile(content,
                    props.dispatch)}/>
                <Route path="/dialogs" render={getDialogs(messages, props.dispatch)}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
};

export default App;
