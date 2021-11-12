import { connect } from 'react-redux';
import React from 'react';
import { signup, removeErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
    };
};

const mapDispatchToProps = dispatch => {
    return { 
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button className="other-form-buttom" onClick={() => dispatch(openModal('login'))}>
                Login
            </button>
        ),
        signup: user => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal()),
        removeErrors: () => dispatch(removeErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
