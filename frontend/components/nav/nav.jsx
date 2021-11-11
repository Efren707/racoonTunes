import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const Nav = ({ currentUser, logout, openModal }) => {

    
    const personalGreeting = () => (
        <hgroup className="nav-bar">
            <div className="splash-logo-title">
                <Link to='/'>
                    <img className="logo" src={window.logo} />
                </Link>
                &nbsp;<h1>RacoonTunes</h1>
            </div>
            <div className="nav-buttons">
                <Link className ="upload-btn" to="/upload">Upload</Link>
                &nbsp;&nbsp;
                <button className="header-button" onClick={logout}>Log Out</button>
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