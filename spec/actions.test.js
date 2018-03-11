import * as actions from '../src/actions';
import * as types from '../src/constants/constants.js';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import moment from 'moment';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

test('should start fetching all currencies data', () => {
    const store = mockStore({});
    store.dispatch(actions.getCur());
    const dispatchedAction = store.getActions();
    expect(dispatchedAction).toEqual([{
        type: types.GET_CUR_REQUEST
    }]);

});

test('should successfully take all currencies data', () => {
    const store = mockStore({});
    return store.dispatch(actions.getCur())
        .then(() => {
            const dispatchedAction = store.getActions();
            expect(dispatchedAction[1].payload.length).toBeTruthy();

        });
});

test('should start fetching dynamic of currencies data', () => {
    const store = mockStore({});
    store.dispatch(actions.getDynamic('145', moment(), moment().date(-20)));
    const dispatchedAction = store.getActions();
    expect(dispatchedAction).toEqual([{
        type: types.GET_DYNAMIC_REQUEST
    }]);

});

test('should successfully take dynamic of currencies data', () => {
    const store = mockStore({});
    return store.dispatch(actions.getDynamic('145', moment().date(-20), moment()))
        .then(() => {
            const dispatchedAction = store.getActions();
            expect(dispatchedAction[1].payload.length).toBeTruthy();
        });
});

test('should start fetching info about currency data', () => {
    const store = mockStore({});
    store.dispatch(actions.getInfo('145'));
    const dispatchedAction = store.getActions();
    expect(dispatchedAction).toEqual([{
        type: types.GET_INFO_REQUEST
    }]);

});

test('should successfully take info about currency data', () => {
    const store = mockStore({});
    return store.dispatch(actions.getInfo('145'))
        .then(() => {
            const dispatchedAction = store.getActions();
            expect(dispatchedAction[1].payload).toBeTruthy();
        });
});

test('should create an action to change currency', () => {
    const id = 'curId';
    const abr = 'curAbr';
    const expectedAction = {
        type: types.CHANGE_CUR_FOR_DYNAMIC,
        payload: {
            changedId: id,
            changedAbr: abr
        }
    };
    expect(actions.changeCurForDynamic(id, abr)).toEqual(expectedAction);
});

test('should create an action to change currency1', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const id = 'curId';
    const abr = 'curAbr';
    const expectedAction = {
        type: types.CHANGE_CUR_FOR_DYNAMIC,
        payload: {
            changedId: id,
            changedAbr: abr
        }
    };
    store.dispatch(actions.changeCurForDynamic(id, abr));
    const dispatchedAction = store.getActions();
    expect(dispatchedAction).toEqual([expectedAction]);
});

test('should create an action to filter avaible currencies', () => {
    const value = 'text';
    const expectedAction = {
        type: types.FILTER_AVAILABLE_CUR,
        payload: {
            filterText: value
        }
    };
    expect(actions.filterAvailableCur(value)).toEqual(expectedAction);
});

test('should create an action to change start date', () => {
    const date = moment();
    const expectedAction = {
        type: types.CHANGE_START_DATE,
        payload: {
            startDate: date
        }
    };
    expect(actions.changeStartDate(date)).toEqual(expectedAction);
});

test('should create an action to change end date', () => {
    const date = moment();
    const expectedAction = {
        type: types.CHANGE_END_DATE,
        payload: {
            endDate: date
        }
    };
    expect(actions.changeEndDate(date)).toEqual(expectedAction);
});

// test('should create an action to add currency to favorite if in favorite there are no such currency', () => {
//     const initialState = {
//         availableCurrencies: {
//             choosenId: "145",
//             choosenAbr: "USD"
//         }

//     };
//     const store = mockStore(initialState);
//     return store.dispatch(actions.getDynamic('145', moment().date(-20), moment()))
//         .then(() => {
//             store.dispatch({
//                 type: 'GET_DYNAMIC_SUCCESS',
//                 payload: store.getActions()[1].payload
//             }
//             );
//             console.log(store.getState());
//             const expectedAction = {
//                 type: types.ADD_CUR_TO_FAVORITE,
//                 empty: false,
//                 payload: {
//                     favoriteId: '145',
//                     favoriteAbr: 'USD',
//                     dynamic: store.getActions()[1].payload,
//                     selected: true,
//                     new: true
//                 }
//             };
//             store.dispatch(actions.addCurToFavorite());
//             const dispatchedAction = store.getActions()[1];
//             expect(dispatchedAction).toEqual([expectedAction]);
//         });
// });
