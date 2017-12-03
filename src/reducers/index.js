import { combineReducers } from 'redux';
import { getCurrencies } from './get-currencies.reducer';
import { availableCurrencies } from './available-currencies.reducer';
import { getDynamic } from './get-dynamic.reducer';
import { changeDate } from './change-date.reducer';
import { curToFavorite } from './add-cur-to-favorite.reducer';
import {getInfo} from './get-info.reducer';

export const todoApp = combineReducers({
    getCurrencies,
    availableCurrencies,
    getDynamic,
    changeDate,
    curToFavorite,
    getInfo
});

