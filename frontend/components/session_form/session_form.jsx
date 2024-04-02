import React from 'react';
import { Redirect } from 'react-router'
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            name: "",
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleDemoSubmit(e) {
        e.preventDefault();
        this.props.login({
            username: "demoUser",
            password: "123456"
        }).then(this.props.closeModal);
    }

    handleSubmit(e) {

        e.preventDefault();
        const user = Object.assign({}, this.state); 

        this.props.processForm(user).then(response => {
            if(response.errors){
                this.renderErrors();
            } else {
                this.props.closeModal();
            }
        })
    }

    renderErrors() {

        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className="login-errors" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {

        let email;
        let name;
        let demo;
        
        if(this.props.formType === 'signup'){
            email = <div><label><span>Email:</span>&nbsp;<input type="text" value={this.state.email} onChange={this.update('email')} /></label><br/></div>
            name = <div><label><span>Name:</span>&nbsp;<input type="text" value={this.state.name} onChange={this.update('name')} /></label><br/></div>
        }

        if(this.props.formType === 'login'){
            demo = <div><button className="demo-button" onClick={this.handleDemoSubmit}>demo</button></div>
        }
        
        return (
            <div className="login-form-container">
                <h2>Please {this.props.formType} or {this.props.otherForm}</h2>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <br />
                    
                    {this.renderErrors()}
                    
                    <div className="login-form">
                        
                        {name}
                        {email}

                        <label><span>Username:</span>&nbsp;
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                       
                        <br />
                        <label><span>Password:</span>&nbsp;
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <br />

                        <input className="session-submit" type="submit" value={this.props.formType} />
                        <br/>
                        <br/>
                        {demo}
                        
                    </div>
                </form>
                <Redirect to='/discover' />
            </div>
        );
    }
}

export default SessionForm;