
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { routerStateReducer } from 'redux-react-router';
import clientReducer from './client-reducer';

var _store;

const initialState = {
    dashboard: 'foo'
};

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

function appReducer(state, action) {
    return {...state,
        router: routerStateReducer(state.router, action),
        client: clientReducer(state.client, action)
    };
}

export function initStore() {
    _store = createStoreWithMiddleware(appReducer, initialState);
    return _store;
}
