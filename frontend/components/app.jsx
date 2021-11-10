import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import HomePageContainer from './home/home_page_container';
import UploadSongFormContainer from './songs/upload_form';
import EditSongFormContainer from './songs/edit_form';
import SongShowContainer from './songs/song_show';
import DiscoverContainer from './discover/discover';
import SplashContainer from './splash/splash';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div className="app">
        <Modal />
        <Switch>
            <Route exact path="/" component={SplashContainer}/>
            <ProtectedRoute exact path="/discover" component={DiscoverContainer}/>
            <AuthRoute exact path="/upload" component={UploadSongFormContainer}/>
            <AuthRoute exact path="/api/songs/edit/:id" component={EditSongFormContainer}/>
            <ProtectedRoute exact path="/api/songs/:id" component={SongShowContainer}/>
        </Switch>
    </div>
);

export default App;