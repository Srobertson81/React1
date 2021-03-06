import React from 'react';

class LoginForm extends React.Component {
    render() {
        return (
            <form>
                <h3>Log In:</h3>
                <p>User Name:</p>
                <input type="text"/>
                <p>Password:</p>
                <input type="text"/>
            </form>
        );        
    }
}
export default LoginForm;
