import React from 'react';
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
        this.props.processForm(user).then(this.props.closeModal)
        .then(song => this.props.history.push(`/api/songs/${song.song.id}`));
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

        if(this.props.formType === 'signup'){
            email = <div><label>Email:<input type="text" value={this.state.email} onChange={this.update('email')} /></label><br/></div>
            name = <div><label>Name:<input type="text" value={this.state.name} onChange={this.update('name')} /></label><br/></div>
        }

        if(this.props.formType === 'login'){
            demo = <div><button onClick={this.handleDemoSubmit}>Login as guest</button><br /></div>
        }

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <br />
                    Please {this.props.formType} or {this.props.otherForm}
                    
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />

                        {name}
                        {email}

                        <label>Username:
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />

                        <input className="session-submit" type="submit" value={this.props.formType} />

                        {demo}
                        
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);
