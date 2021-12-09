import React from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { receiveAllUsers, receiveOneUser } from '../../actions/user_actions';
import NavContainer from '../nav/nav';

class UserShow extends React.Component {

    
    render(){
        
        const { user } = this.props;
        
        return(
            
            <div>
                <h1>hello</h1>
                
            </div>
        )
    }

}

const mSTP = (state, ownProps) => {
    
    return{
        currentUser: state.session,
        currentUserId: state.session.id
    }   
}

const mDTP = dispatch => ({
    receiveUser: userId => dispatch(receiveOneUser(userId)),
})

const UserShowContainer = connect(mSTP, mDTP)(UserShow);
export default UserShowContainer;

