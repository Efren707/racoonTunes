import React from "react";
import { connect } from "react-redux";
import { updateCurrentUser } from '../../actions/user_actions';
import NavContainer from "../nav/nav";

class EditUserForm extends React.Component {

    constructor(props) {
        super(props);  
        this.state = ({...this.props.user})
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => (
            this.setState({[field]: e.currentTarget.value})
        )
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.updateUser(this.state);
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
                    <label><span>Name *</span>&nbsp;
                        <input value={this.state.name} onChange={this.update("name")}></input>
                    </label>
                    <br/>
                    <br/>

                    <label><span>Username *</span>&nbsp;
                        <input value={this.state.username} onChange={this.update("username")}></input>
                    </label>    
                    <br/>
                    <br/>

                    <label><span>Email *</span>&nbsp;
                        <input value={this.state.email} onChange={this.update("email")}></input>
                    </label>          
                    <br/>
                    <br/>
                    <button  className="edit-button" onClick={this.handleSubmit}>Update</button>

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