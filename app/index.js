import React from 'react';

// import ReactDOM from 'react-dom';

import { Router, Route } from 'react-router';
import { reduxRouteComponent } from 'redux-react-router';

import { initStore, getStore } from 'services/store';
import { initFirebase } from 'services/firebase';

import App from 'containers/app';
import Dashboard from 'containers/dashboard';
import Client from 'containers/client';
import Consumer from 'containers/consumer';

import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import SliderMonitor from 'redux-slider-monitor';

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

    var store = initStore();
    initFirebase(fb);

    var router = (
        <Router history={BrowserHistory}>
            {makeRoutes()}
        </Router>
    );

    var debug = (
        <DebugPanel top bottom right>
            <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
    );

    React.render((
        <div>
            {router}
            {/*debug*/}
        </div>
    ), document.getElementById('app'));
}

export function renderMarkup(initialState) {
    return '';
}
