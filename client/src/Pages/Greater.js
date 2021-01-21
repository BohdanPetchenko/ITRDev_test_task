import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import jwtDecode from 'jwt-decode';
import { history } from "../history/index";

import actionGetAbout from '../actions/action-get-about'

function Greater(props) {
        
    useEffect(() => {
        props.isLoggedIn && props.onAbout && typeof props.onAbout === 'function' && props.onAbout(userToken)
    }, [props.isLoggedIn]);

    if (!props.isLoggedIn) {
        history.push('/login')
        return null
    }

    let userToken = props.isLoggedIn
    let decodeToken = jwtDecode(userToken)

    return (
        <div style={{ textAlign: 'center' }}>
            <h1> Привет, {decodeToken.name}</h1>
            <h6>{props.about}</h6>
        </div >
    )
}

const ConnectedGreater = connect(mapStateToProps, { onAbout: actionGetAbout })(Greater);


function mapStateToProps(state) {

    return {
        isLoggedIn: localStorage.getItem('userToken'),
        about: state.reducer.get("about")
    };
}

const App = () =>
    <>
        <ConnectedGreater />
    </>

export default App