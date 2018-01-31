import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {todoApp} from '../reducers/index.js';
import persistState from 'redux-localstorage';

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    todoApp,
    initialState,
    composeEnhancers(
    applyMiddleware(thunk, logger),
    persistState()
  ));
  return store;
}
