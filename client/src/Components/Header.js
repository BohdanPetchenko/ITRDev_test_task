import React from 'react';

import { Switch, Route } from "react-router-dom";

import Greater from "../Pages/Greater";
import Login from "../Pages/Login";


function Header() {
    return (
        <>
            <Switch >
                <Route exact path="/" component={Greater} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </>
    );
}

export default Header;