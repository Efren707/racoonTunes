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
                    <Link className="nav-home-link" to='/'><h1 className="upload-btn">Home</h1></Link>
                    <h1 className="upload-btn">Stream</h1>
                    <h1 className="upload-btn">Library</h1>
                </div>

                
                <SearchBarContainer/>
            
            
                <div className="nav-buttons">

                    <Link className="upload-btn" to="/upload">Upload</Link>
                    

                    <Link className ="upload-btn" to={`/users/${currentUser.id}`}>Profile</Link>
                    
                    <Link style={{textDecoration: "none"}} to={`/users/${currentUser.id}`}>
                    <div className='nav-user-profile'>
                        <img className="nav-user-pic" src={currentUser.profile_pic} />&nbsp;
                        <h1 className="upload-btn">{currentUser.name}</h1>
                    </div>
                    </Link>

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