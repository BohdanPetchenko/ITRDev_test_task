import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <Field
                        className="inputField"
                        name="username"
                        component="input"
                        type="text"
                        placeholder="Username"
                    />
                    <Field
                        className="inputField"
                        name="password"
                        component="input"
                        type="password"
                        placeholder="Password"
                    />
                    <button className="loginButton" type="submit" label="submit">Submit</button>
                </form>
            </div>
        );
    }
}

LoginForm = reduxForm({
    form: 'login',
})(LoginForm);

export default LoginForm;