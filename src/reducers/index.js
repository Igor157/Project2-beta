import { combineReducers } from 'redux';
import { getCurrencies } from './getCurrencies.reducer.js';
import { avaibleCurrencies } from './avaibleCurrencies.reducer.js';

export const todoApp = combineReducers({
    getCurrencies,
    avaibleCurrencies,
})

