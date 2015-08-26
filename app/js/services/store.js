
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { devTools, persistState } from 'redux-devtools';

import { routerStateReducer } from 'redux-react-router';
import clientReducer from 'reducers/client';
import consumerReducer from 'reducers/consumer';

var _store;

const finalCreateStore = compose(
    applyMiddleware(thunkMiddleware),
    // devTools(),
    // persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
);

const appReducer = combineReducers({
    router: routerStateReducer,
    client: clientReducer,
    consumer: consumerReducer
});

export function initStore() {
    _store = finalCreateStore(appReducer, {});
    return _store;
}

export function getStore() {
    return _store;
}
