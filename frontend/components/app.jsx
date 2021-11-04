import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import HomePageContainer from './home/home_page_container';
import LoginFormContainer from './session_form/login_form_container.jsx';
import SignupFormContainer from './session_form/signup_form_container.jsx';
import UploadSongFormContainer from './songs/upload_form';
import SongShowContainer from './songs/song_show';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div className="app">
        <Modal />
        <header className="splash-header">
            <div className="splash-logo-title">
                <Link to='/'>
                    <img height="40px" src={window.logo} />
                </Link>
                <h1>RacoonTunes</h1>
            </div>
            <GreetingContainer />
            
        </header>
        <HomePageContainer />
        <Switch>
            <AuthRoute exact path="/upload" component={UploadSongFormContainer}/>
            <ProtectedRoute exact path="/api/songs/:id" component={SongShowContainer}/>
        </Switch>
    </div>
);

export default App;