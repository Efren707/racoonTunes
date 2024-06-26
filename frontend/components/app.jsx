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
import UserShowContainer from './user/user_show';
import EditUserFormContainer from './user/user_edit';
import PlaybarContainer from './playbar/playbar';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div className="app">
        <Modal />
        <Switch>
            
            <ProtectedRoute exact path="/discover" component={DiscoverContainer}/>
            <AuthRoute exact path="/upload" component={UploadSongFormContainer}/>
            <AuthRoute exact path="/songs/edit/:id" component={EditSongFormContainer}/>
            <ProtectedRoute exact path="/songs/:id" component={SongShowContainer}/>
            <ProtectedRoute exact path="/users/:id" component={UserShowContainer}/>
            <ProtectedRoute exact path="/users/edit/:id" component={EditUserFormContainer}/>
            <ProtectedRoute exact path="/playbar" component={PlaybarContainer}/>
            <Route exact path="/" component={SplashContainer} />
        </Switch>
    </div>
);

export default App;