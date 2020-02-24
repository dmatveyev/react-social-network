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
import DialogsContainer from "./component/dialogs/DialogsContainer";

const App = (props) => {

    function getProfile(store) {
        return () => <ProfileContent/>;
    }

    const getDialogs = (store) => {
        return () => <DialogsContainer />
    };

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={getProfile(props.store)}/>
                <Route path="/dialogs" render={getDialogs(props.store)}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
};

export default App;
