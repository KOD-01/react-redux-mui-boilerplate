import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import Auth from './auth'
import SignIn from './signIn'
import SignUp from './signUp'

export default () => (
    <Container disableGutters maxWidth={false}>
        <Switch>
            <Route  path="/"       component={Auth} />
            <Route  path="/signin" component={SignIn} />
            <Route  path="/signup" component={SignUp} />
        </Switch>
    </Container>
);
