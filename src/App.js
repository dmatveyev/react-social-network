import React from 'react';
import Navbar from "./component/navbar/Navbar";
import './App.css';
import {Route} from "react-router-dom";
import News from "./component/news/News";
import Music from "./component/music/Music";
import Settings from "./component/settings/Settings";
import DialogsContainer from "./component/dialogs/DialogsContainer";
import UsersContainer from "./component/users/UsersContainer";
import ProfileContainer from "./component/content/ProfileContainer";
import HeaderContainer from "./component/header/HeaderContainer";

const App = (props) => {

    function getProfile(store) {
        return () => <ProfileContainer/>;
    }

    const getDialogs = (store) => {
        return () => <DialogsContainer />
    };

    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile/:userId?" render={getProfile(props.store)}/>
                <Route path="/dialogs" render={getDialogs(props.store)}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/users" render={() => <UsersContainer />}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
};

export default App;
