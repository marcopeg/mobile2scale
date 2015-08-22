import React from 'react';

// import ReactDOM from 'react-dom';

import { Router, Route } from 'react-router';
import { reduxRouteComponent } from 'redux-react-router';

import { initStore, getStore } from 'app/store';
import { initFirebase } from 'app/firebase-service';

import App from 'app/app';
import Dashboard from 'dashboard/dashboard';
import Client from 'client/client';
import Consumer from 'consumer/consumer';

function makeRoutes() {
    return (
        <Route component={reduxRouteComponent(getStore())}>
            <Route component={App}>
                <Route path="/" component={Client} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/consumer" component={Consumer} />
            </Route>
        </Route>
    );
}

export function start(_, fb) {
    var BrowserHistory = require('react-router/lib/BrowserHistory').history;

    initStore();
    initFirebase(fb);

    React.render((
        <Router history={BrowserHistory}>
            {makeRoutes()}
        </Router>
    ), document.getElementById('app'));
}

export function renderMarkup(initialState) {
    return '';
}
