import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import HomePageContainer from './home/home_page_container';
import UploadSongFormContainer from './songs/upload_form';
import SongShowContainer from './songs/song_show';
import DiscoverContainer from './discover/discover';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div className="app">
        <Modal />
        <header className="splash-header">
            <div className="login-nav">
                <div className="splash-logo-title">
                    <Link to='/'>
                        <img height="40px" src={window.logo} />
                    </Link>
                    <h1>RacoonTunes</h1>
                </div>
                <GreetingContainer />
            </div>
        </header>
        <HomePageContainer />
        
        
        <Switch>
            
            <ProtectedRoute exact path="/discover" component={DiscoverContainer}/>
            <AuthRoute exact path="/upload" component={UploadSongFormContainer}/>
            <ProtectedRoute exact path="/api/songs/:id" component={SongShowContainer}/>
        </Switch>
    </div>
);

export default App;