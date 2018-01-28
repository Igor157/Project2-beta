import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CurrencyPage } from './components/currency-page';
import configureStore from './store/configureStore.js';
import moment from 'moment';

import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
import { createStore } from 'redux';
let initDateForStat = { startDate: moment().date(-20), endDate: moment() };
let store = configureStore({
    getCurrencies: { cur: [] },
    getDynamic: { dynamic: [] },
    curToFavorite: {
        empty: true,
        favoriteCurData: []
    },
    changeDate: {
        startDate: initDateForStat.startDate,
        endDate: initDateForStat.endDate
    },
    getInfo: {
        info: []
    }
});
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <CurrencyPage />
        </Router>
    </Provider>,
    document.getElementById('ik-page')
);

