import React from "react";
import { connect } from "react-redux";
import { updateCurrentUser } from '../../actions/user_actions';
import NavContainer from "../nav/nav";

class EditUserForm extends React.Component {

    constructor(props) {
        super(props);  
        
    }

    

    render(){
        
        
        return(
            <div className="edit-page-background">
                <NavContainer/>
                <div className="edit-page">
                <form className="edit-form">
                    <br/>
                    <br/>
                    <h1>Update Profile</h1>
                    <br/>
                    

                </form>
                </div>
            </div>
        )
    }
}


const mSTP = (state, ownProps) => {
    
    return {
        user: state.entities.users[ownProps.match.params.id],
        currentUser: state.session.id,
        formType: 'edit'
    }
    
}

const mDTP = dispatch => ({
    updateUser: user => dispatch(updateCurrentUser(user))
})

const EditUserFormContainer = connect(mSTP, mDTP)(EditUserForm)

export default EditUserFormContainer