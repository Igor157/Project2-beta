import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { CurrencyPage } from './components/currency-page';
import configureStore from './store/configureStore.js';

import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
import { createStore } from 'redux';

let store = configureStore({avaibleCurrencies: {filterText: false}, getCurrencies: {cur: []}});
ReactDOM.render(
    <Provider store={store}>
        <CurrencyPage />
    </Provider>,
    document.getElementById('ik-page')
);

