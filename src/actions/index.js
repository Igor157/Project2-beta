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

export function getDynamic(curID) {

    return (dispatch) => {
        dispatch({
            type: 'GET_DYNAMIC_REQUEST'
        });
        let dynamicForIdPromise = requestServices.getDynamicForCurId(curID);
        dynamicForIdPromise
            .then(data => {
                dispatch({
                    type: 'GET_DYNAMIC_SUCCESS',
                    payload: data
                });
            });
    };
}
export function changeCurForDynamic(abr) {
    return {
        type: 'CHANGE_CUR_FOR_DYNAMIC',
        payload: {
            changedAbr: abr
        }
    };
}
export function filterAvaibleCur(value) {
    return {
        type: 'FILTER_AVAIBLE-CUR',
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