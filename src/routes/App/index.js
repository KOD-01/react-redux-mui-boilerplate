import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Header from '../../modules/Header';

import Home from '../Home/loadable';
import Auth from '../Auth/loadable';

export default () => (
    <Container disableGutters maxWidth={false}>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/auth" component={Auth} />
        </Switch>
    </Container>
);
