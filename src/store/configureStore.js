import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {todoApp} from '../reducers/index.js';

export default function configureStore(initialState) {
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const store = createStore(
    todoApp,
    initialState,
    composeEnhancers(
    applyMiddleware(thunk, logger)
  ));
  return store;
}
