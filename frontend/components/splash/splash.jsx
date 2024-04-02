import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import HomePageContainer from '../home/home_page_container';
import GreetingContainer from '../greeting/greeting_container'
import {receiveCurrentUser} from '../../actions/session_actions'

class Splash extends React.Component {

    constructor(props) {
        super(props);
    }

    
    render() {   
        
        return(

            <div>
                <header className="splash-header">
                    <div className="login-nav">
                        <div className="splash-logo-title">
                            <Link to='/'>
                                <img className="logo" src={window.logo} />
                            </Link>
                            &nbsp;<h1>RacoonTunes</h1>
                        </div>
                        <GreetingContainer />
                    </div>
                </header>
                
                <HomePageContainer />

            </div>
        )
        
        
    }
}

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mDTP = dispatch => ({
    receiveCurrentUser: user => dispatch(receiveCurrentUser(user))
})

const SplashContainer = connect(mSTP, mDTP)(Splash);
export default SplashContainer;