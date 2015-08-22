
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { routerStateReducer } from 'redux-react-router';
import clientReducer from './client-reducer';
import consumerReducer from './consumer-reducer';

var _store;

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

function appReducer(state, action) {
    return {...state,
        router: routerStateReducer(state.router, action),
        client: clientReducer(state.client, action),
        consumer: consumerReducer(state.consumer, action)
    };
}

export function initStore() {
    _store = createStoreWithMiddleware(appReducer, {});
    return _store;
}

export function getStore() {
    return _store;
}
