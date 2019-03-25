import React from 'react';
import { Link, Route } from 'react-router-dom';
 
class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    render() {
        const link = this.props.formType === 'login' ? '/signup' : '/login';
        let header;
        let linkName;
        if (this.props.formType === 'login') {
            header = 'Log in';
            linkName = 'Sign Up';
        } else {
            header = 'Sign Up';
            linkName = 'Log in';
        }
        return (
            <>
                <Route 
                    path="/" 
                    render={
                        () => {
                            if (this.props.currentUser) {
                                return < Redirect to="/" />
                            }
                        }
                    }
                />
                <>
                <h1>{header}</h1>
                <Link to={link}>{linkName}</Link>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.username} onChange={this.handleChange('username')}/>
                    <input type="password" value={this.state.password} onChange={this.handleChange('password')}/>
                    <input type="submit" value={this.formType}/>
                </form>
                <ul>{this.props.errors}</ul>
                </>
            </>
        )
    }
}

export default SessionForm;