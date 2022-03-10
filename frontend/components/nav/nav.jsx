import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import SearchBarContainer from './searchbar';

const Nav = ({ currentUser, logout, openModal }) => {

    
    const personalGreeting = () => (
        <hgroup className="nav-bar">
            <div className="nav-bar-inner">
                <div className="splash-logo-title">
                    <Link to='/'>
                        <img className="logo" src={window.logo} />
                    </Link>
                    &nbsp;<Link to='/'><h1 className="nav-logo-link">RacoonTunes</h1></Link>
                </div>

                
                <SearchBarContainer/>
            
            
                <div className="nav-buttons">

                    <a className="upload-btn" href="https://github.com/Efren707" target="_blank">Github</a>
                    &nbsp;&nbsp;

                    <a className="upload-btn" href="https://www.linkedin.com/in/efren-bahena-419807172/" target="_blank">LinkedIn</a>
                    &nbsp;&nbsp;

                    <a className="upload-btn" href="https://angel.co/u/efren-bahena" target="_blank">AngelList</a>
                    &nbsp;&nbsp;

                    <Link className="upload-btn" to="/upload">Upload</Link>
                    &nbsp;&nbsp;

                    <Link className ="upload-btn" to={`/users/${currentUser.id}`}>Profile</Link>
                    &nbsp;&nbsp;
                    
                    <button className="header-button" onClick={logout}>Log Out</button>
                </div>
            </div>
        </hgroup>
    );

    return (
        currentUser ? personalGreeting(currentUser, logout) : null
    )
};

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)

export default NavContainer;