import React from 'react';

// import ReactDOM from 'react-dom';

import { Router, Route } from 'react-router';
import { reduxRouteComponent } from 'redux-react-router';

import { initStore } from 'app/store';

import App from 'app/app';
import Dashboard from 'dashboard/dashboard';
import Client from 'client/client';
import Consumer from 'consumer/consumer';

function makeRoutes(initialState) {
    const store = initStore();
    const routes = (
        <Route component={reduxRouteComponent(store)}>
            <Route component={App}>
                <Route path="/" component={Client} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/consumer" component={Consumer} />
            </Route>
        </Route>
    );
    return [routes, store];
}

export function start(initialState) {
    var BrowserHistory = require('react-router/lib/BrowserHistory').history;
    var [routes] = makeRoutes(initialState);

    React.render((
        <Router history={BrowserHistory}>
            {routes}
        </Router>
    ), document.getElementById('app'));
}

export function renderMarkup(initialState) {
    var Location = require('react-router/lib/Location');
    var [routes] = makeRoutes(initialState);
    var html;

    Router.run(routes, new Location('/'), (err, initialState) => {
        html = React.renderToString(<Router {...initialState}/>);
    });

    return html;
}
