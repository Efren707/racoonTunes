import React from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { receiveAllUsers, receiveOneUser } from '../../actions/user_actions';
import NavContainer from '../nav/nav';

class UserShow extends React.Component {

    
    render(){
        if(!this.props.user) return null;

        const { user } = this.props;
        
        return(
            
            <div className="user-show-page">
                <NavContainer/>

                <div className="user-show">

                    <div className="user-show-info">
                        <img className="user-profile-pic" src={user.profile_pic}/>                    
                    
                        <div className="user-name">
                            <h1>{user.name}</h1>
                           
                            <h2>{user.username}</h2>
                        </div>
                        
                    </div>




                </div>
                
            </div>
        )
    }

}

const mSTP = (state, ownProps) => {
    
    return{
        user: state.entities.users[state.session.id],
        currentUser: state.session,
        currentUserId: state.session.id
    }   
}

const mDTP = dispatch => ({
    receiveUser: userId => dispatch(receiveOneUser(userId)),
})

const UserShowContainer = connect(mSTP, mDTP)(UserShow);
export default UserShowContainer;

