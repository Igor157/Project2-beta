import { combineReducers } from 'redux';
import { getCurrencies } from './get-currencies.reducer';
import { avaibleCurrencies } from './avaible-currencies.reducer';
import {getDynamic} from './get-dynamic.reducer';
import {bothSideConverter} from './both-side-converter.reducer'

export const todoApp = combineReducers({
    getCurrencies,
    avaibleCurrencies,
    getDynamic,
    bothSideConverter    
})

