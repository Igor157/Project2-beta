import * as actions from '../src/actions';
import * as types from '../src/constants/constants.js';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

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
    const state = store.getState();
    return store.dispatch(actions.getCur())
        .then(() => {
            const dispatchedAction = store.getActions();
            expect(dispatchedAction[1].payload).toBeTruthy();

        });
});