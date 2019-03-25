import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component  {

    render() {
        let greeting;
        if (this.props.currentUser) {
            greeting = (
                <div>
                    <p>Welcome {this.props.currentUser.username}</p>
                    <button onClick={this.props.logout}>Log Out</button>
                </div>
            );
        } else {
            greeting = (
                <div>
                    <Link to="/signup">Sign Up</Link>;
                    <Link to="/login">Log In</Link>;
                </div>
            );
        }
        return (
            <div>{greeting}</div>
        );
    }
}

export default Greeting;