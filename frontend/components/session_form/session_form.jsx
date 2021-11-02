import React from "react";
import { Redirect } from "react-router";

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            name: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    componentWillUnmount(){
        this.props.removeErrors();
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleDemoSubmit(e) {
        e.preventDefault();
        this.props.processForm({
            username: "demoUser",
            password: "123456"
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
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

        if(this.props.formType === 'Sign up'){
            email = <div><label>Email:<input type="text" value={this.state.email} onChange={this.update('email')} /></label><br/></div>
            name = <div><label>Name:<input type="text" value={this.state.name} onChange={this.update('name')} /></label><br/></div>
        }

        if(this.props.formType === 'login'){
            demo = <div><button onClick={this.handleDemoSubmit}>Login as guest</button><br /></div>
        }

        return (

            <form onSubmit={this.handleSubmit}>
            
                Please {this.props.formType} or {this.props.navLink}
                {this.renderErrors()}
                <br />

                <label>Username:
                    <input type="text" value={this.state.username} onChange={this.update('username')} />
                </label>
                <br />

                <label>Password:
                    <input type="password" value={this.state.password} onChange={this.update('password')} />
                </label>
                <br />

                {email}
                
                {name}
                
                <input type="submit" value={this.props.formType} />

                {demo}
            </form>

        );
    }

}

export default SessionForm;