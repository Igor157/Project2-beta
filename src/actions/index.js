import { requestServices } from '../Services/Services.js';
import { converterServices } from '../Services/Services.js';


export const filterCur = (value) => {
    return {
        type: 'FILTER_CUR',
        payload: value
    };
};

export const chooseCur = (id, abr) => {
    return {
        type: 'CHOOSE_CUR',
        payload: {
            id: id,
            abr: abr
        }
    };
};
// export const initialize = () => {
//     return {
//         type: 'INITIALIZE',
//         payload: {
//             cur: [],
//             filterText: false
//         }
//     }
// }


export function getCur() {

    return (dispatch) => {
        dispatch({
            type: 'GET_CUR_REQUEST'
        });
        let todaysCurPromise = requestServices.getTodaysCurrencies();
        todaysCurPromise
            .then(data => {
                dispatch({
                    type: 'GET_CUR_SUCCESS',
                    payload: data
                });
            });
    };
}

export function getDynamic(curID, start, end) {

    return (dispatch) => {
        dispatch({
            type: 'GET_DYNAMIC_REQUEST'
        });
        let dynamicForIdPromise = requestServices.getDynamicForCurId(curID, start, end);
        dynamicForIdPromise
            .then(data => {
                dispatch({
                    type: 'GET_DYNAMIC_SUCCESS',
                    payload: data
                });
            });
    };
}
export function changeCurForDynamic(id, abr) {
    return {
        type: 'CHANGE_CUR_FOR_DYNAMIC',
        payload: {
            changedId: id,
            changedAbr: abr
        }
    };
}
export function filterAvailableCur(value) {
    return {
        type: 'FILTER_AVAILABLE-CUR',
        payload: {
            filterText: value
        }
    };
}

export function changeValue1(target) {
    return {
        type: 'CHANGE_VALUE_1',
        payload: {
            inputValue: target
        }
    };
}
export function changeValue2(target) {
    return {
        type: 'CHANGE_VALUE_2',
        payload: {
            inputValue: target
        }
    };
}
export function changeAbr1(target, cur) {
    return {
        type: 'CHANGE_ABR_1',
        payload: {
            input1Abr: target,
            current1Rate: converterServices.filterCurForTarget(cur, target) ?
                converterServices.filterCurForTarget(cur, target).curRate
                : ''
        }
    };
}
export function changeAbr2(target, cur) {
    return {
        type: 'CHANGE_ABR_2',
        payload: {
            input2Abr: target,
            current2Rate: converterServices.filterCurForTarget(cur, target) ?
                converterServices.filterCurForTarget(cur, target).curRate
                : ''
        }
    };
}

export function changeStartDate(date) {
    return {
        type: 'CHANGE_START_DATE',
        payload: {
            startDate: date
        }
    };
}
export function changeEndDate(date) {
    return {
        type: 'CHANGE_END_DATE',
        payload: {
            endDate: date
        }
    };
}
export function addCurToFavorite(abr, id, dynamic, favoriteFirst) {
    return {
        type: 'ADD_CUR_TO_FAVORITE',
        payload: {
            favoriteId: id,
            favoriteAbr: abr,
            dynamic: dynamic,
            selected: favoriteFirst
        }
    };

}
export function selectFavoriteCur(targetId) {
    return {
        type: 'SELECT_FAVORITE_CUR',
        payload: {
            id: targetId,
            new: false,
            selected: true
        }
    };

}
export function removeFromFavorite(targetId) {
    return {
        type: 'REMOVE_FROM_FAVORITE',
        payload: {
            id:targetId
        }
    };
}