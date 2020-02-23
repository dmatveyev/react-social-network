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
    let dialogsUsers = props.data.dialog.dialogsUsers;
    let dialogMessages = props.data.dialog.dialogMessages;
    let content = props.data.content;

    function getProfile(content) {
        return () => <ProfileContent content={content}/>;
    }

    const getDialogs = (dialogsUsers, dialogMessages) => {
        return () => <Dialogs dialogsUsers={dialogsUsers} dialogMessages={dialogMessages}/>
    };

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" component={getProfile(content)}/>
                    <Route path="/dialogs" component={getDialogs(dialogsUsers, dialogMessages)}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
};

export default App;
