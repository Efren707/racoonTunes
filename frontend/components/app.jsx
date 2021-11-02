import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (

    <div>
        <header>      
            <Link to='/'>
                <img height="100px" src={window.logo} />
            </Link> 
            <h1>Welcome to RacoonTunes!</h1>
            <GreetingContainer />
        </header>

        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer}/>
            <AuthRoute exact path="/signup" component={SignUpFormContainer}/>
            <Redirect to="/" />
        </Switch>
        
    </div>
);

export default App;