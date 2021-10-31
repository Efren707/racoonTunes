import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav>
            <Link to='/signup'>Sign Up</Link>
            &nbsp;or&nbsp;
            <Link to='/login'>Login</Link>
        </nav>
    )

    const personalGreeting = () => (
        <div>
            <h2>Welcome {currentUser.username}</h2>
            <button onClick={logout}>Logout</button>
        </div>
    )

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;