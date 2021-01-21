import React from 'react';
import { connect } from 'react-redux'

import actionLogin from '../actions/action-login'
import FormLogin from './Form-login';

const Login = ({ onLogin }) => {

    return (
        <FormLogin onSubmit={e => {
            onLogin && typeof onLogin === 'function' && onLogin(e.username, e.password)            
        }} />
    )
}

const ConnectedLoginForm = connect(null, { onLogin: actionLogin })(Login);

const App = () =>
    <>
        <ConnectedLoginForm />
    </>

export default App;








