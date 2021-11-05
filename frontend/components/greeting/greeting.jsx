import React from 'react';
import { Link } from 'react-router-dom'

const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="greeting-buttons">
            <button className="greeting-login" onClick={() => openModal('login')}>Login</button>
            &nbsp;&nbsp;
            <button className="greeting-signup" onClick={() => openModal('signup')}>Signup</button>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <Link to="/upload">Upload</Link>
            &nbsp;&nbsp;
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );
    
    return (
        currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
    );
};

export default Greeting;