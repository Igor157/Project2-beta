import { requestServices } from '../Services/Services.js';
import { converterServices } from '../Services/Services.js';
import {
    GET_CUR_REQUEST,
    GET_CUR_SUCCESS,
    GET_DYNAMIC_REQUEST,
    GET_DYNAMIC_SUCCESS,
    CHANGE_CUR_FOR_DYNAMIC,
    FILTER_AVAILABLE_CUR,
    CHANGE_START_DATE,
    CHANGE_END_DATE,
    ADD_CUR_TO_FAVORITE,
    SELECT_FAVORITE_CUR,
    REMOVE_FROM_FAVORITE
} from '../constants/constants.js';

export function getCur() {

    return (dispatch) => {
        dispatch({
            type: GET_CUR_REQUEST
        });
        let todaysCurPromise = requestServices.getTodaysCurrencies();
        todaysCurPromise
            .then(data => {
                dispatch({
                    type: GET_CUR_SUCCESS,
                    payload: data
                });
            });
    };
}

export function getDynamic(curID, start, end) {

    return (dispatch) => {
        dispatch({
            type: GET_DYNAMIC_REQUEST
        });
        let dynamicForIdPromise = requestServices.getDynamicForCurId(curID, start, end);
        dynamicForIdPromise
            .then(data => {
                dispatch({
                    type: GET_DYNAMIC_SUCCESS,
                    payload: data
                });
            });
    };
}
export function changeCurForDynamic(id, abr) {
    return {
        type: CHANGE_CUR_FOR_DYNAMIC,
        payload: {
            changedId: id,
            changedAbr: abr
        }
    };
}
export function filterAvailableCur(value) {
    return {
        type: FILTER_AVAILABLE_CUR,
        payload: {
            filterText: value
        }
    };
}


export function changeStartDate(date) {
    return {
        type: CHANGE_START_DATE,
        payload: {
            startDate: date
        }
    };
}
export function changeEndDate(date) {
    return {
        type: CHANGE_END_DATE,
        payload: {
            endDate: date
        }
    };
}

export function addCurToFavorite() {
    return (dispatch, getState) => {
        let state = getState();
        let favoriteFirst = state.curToFavorite.favoriteCurData.length === 0 ? true : false;
        dispatch({
            type: ADD_CUR_TO_FAVORITE,
            empty: false,
            payload: {
                favoriteId: state.availableCurrencies.choosenId,
                favoriteAbr: state.availableCurrencies.choosenAbr,
                dynamic: state.getDynamic.dynamic,
                selected: favoriteFirst,
                new: true
            }
        });
    };
}

export function selectFavoriteCur(targetId) {
    return (dispatch, getState) => {
        let state = getState();
        let id = targetId;
        let newCur = false;
        let selected = true;
        let favoriteCurData = state.curToFavorite.favoriteCurData.map((item) => {
            if (item.favoriteId === id) {
                return { ...item, new: newCur, selected: selected };
            }
            else {
                return { ...item, selected: false };
            }
        });
        dispatch({
            type: SELECT_FAVORITE_CUR,
            payload: {
                favoriteCurData: favoriteCurData
            }
        });
    };
}

export function removeFromFavorite(targetId) {
    return (dispatch, getState) => {
        let state = getState();
        let id = targetId;
        let theRestOfFavorite = state.curToFavorite.favoriteCurData.filter(item => {
            return item.favoriteId !== id;
        });
        if (theRestOfFavorite.length !== 0) {
            theRestOfFavorite[0].selected = true;
        }
        let empty = theRestOfFavorite.length === 0 ? true : false;
        console.log(empty, 'empty');
        dispatch({
            type: REMOVE_FROM_FAVORITE,
            payload: {
                favoriteCurData: theRestOfFavorite
            },
            empty: empty
        });
    };
}
