import React from 'react';
import { Link, Redirect } from 'react-router-dom'

const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="greeting-buttons">
            <button className="greeting-login" onClick={() => openModal('login')}>Login</button>
            &nbsp;&nbsp;
            <button className="greeting-signup" onClick={() => openModal('signup')}>Signup</button>
        </nav>
    );
    const personalGreeting = () => (
        <Redirect to={"/discover"}/>
    );
    
    return (
        currentUser ? personalGreeting() : sessionLinks()
    );
};

export default Greeting;