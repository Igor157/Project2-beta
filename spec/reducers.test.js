import * as types from '../src/constants/constants.js';
import { getCurrencies } from '../src/reducers/get-currencies.reducer';
import { availableCurrencies } from '../src/reducers/available-currencies.reducer';
import { getDynamic } from '../src/reducers/get-dynamic.reducer';
import { changeDate } from '../src/reducers/change-date.reducer';
import { curToFavorite } from '../src/reducers/add-cur-to-favorite.reducer';
import { getInfo } from '../src/reducers/get-info.reducer';


describe('getCurrencies reducer', () => {
    test('should handle GET_CUR_REQUEST', () => {
        expect(
            getCurrencies({}, {
                type: types.GET_CUR_REQUEST
            })
        ).toEqual(
            {
                fetching: true
            }
        );
    });
    test('should handle GET_CUR_SUCCESS', () => {
        expect(
            getCurrencies(
                {
                    fetching: true
                },
                {
                    type: types.GET_CUR_SUCCESS,
                    payload: 'data'
                })
        ).toEqual(
            {
                cur: 'data',
                fetching: false
            }
        );
    });
});
const initialState = {};

describe('getDynamic reducer', () => {
    test('should handle GET_DYNAMIC_REQUEST', () => {
        expect(
            getDynamic({}, {
                type: types.GET_DYNAMIC_REQUEST
            })
        ).toEqual(
            {
                fetching: true
            }
        );
    });
    test('should handle GET_DYNAMIC_SUCCESS', () => {
        expect(
            getDynamic(
                {
                    fetching: true
                },
                {
                    type: types.GET_DYNAMIC_SUCCESS,
                    payload: 'data'
                })
        ).toEqual(
            {
                dynamic: 'data',
                fetching: false
            }
        );
    });
});

describe('getInfo reducer', () => {
    test('should handle GET_INFO_REQUEST', () => {
        expect(
            getInfo({}, {
                type: types.GET_INFO_REQUEST
            })
        ).toEqual(
            {
                fetching: true
            }
        );
    });
    test('should handle GET_INFO_SUCCESS', () => {
        expect(
            getInfo(
                {
                    fetching: true
                },
                {
                    type: types.GET_INFO_SUCCESS,
                    payload: 'data'
                })
        ).toEqual(
            {
                info: 'data',
                fetching: false
            }
        );
    });
});

describe('availableCurrencies reducer', () => {
    test('should handle FILTER_AVAILABLE_CUR', () => {
        expect(
            availableCurrencies({}, {
                type: types.FILTER_AVAILABLE_CUR,
                payload: {
                    filterText: 'value'
                }
            })
        ).toEqual(
            {
                filterText: 'value'
            }
        );
    });
    test('should handle CHANGE_CUR_FOR_DYNAMIC', () => {
        expect(
            availableCurrencies(
                {
                    choosenId: 'id',
                    choosenAbr: 'abr'
                },
                {
                    type: types.CHANGE_CUR_FOR_DYNAMIC,
                    payload: {
                        changedId: 'id',
                        changedAbr: 'abr'
                    }
                })
        ).toEqual(
            {
                choosenId: 'id',
                choosenAbr: 'abr'
            }
        );
    });
});


describe('changeDate', () => {
    test('should handle CHANGE_START_DATE', () => {
        expect(
            changeDate(
                {
                    startDate: 'startDate1'
                },
                {
                    type: types.CHANGE_START_DATE,
                    payload: {
                        startDate: 'startDate'
                    }
                })
        ).toEqual(
            {
                startDate: 'startDate'
            }
        );
    });
    test('should handle CHANGE_END_DATE', () => {
        expect(
            changeDate(
                {
                    endDate: 'endDate1'
                },
                {
                    type: types.CHANGE_END_DATE,
                    payload: {
                        endDate: 'endDate'
                    }
                })
        ).toEqual(
            {
                endDate: 'endDate'
            }
        );
    });
});

// export function curToFavorite(state = {}, action) {

//     switch (action.type) {
//         case 'ADD_CUR_TO_FAVORITE':
//             return {
//                 ...state,
//                 favoriteCurData: [...state.favoriteCurData, action.payload],
//                 empty: action.empty
//             };
//         case 'SELECT_FAVORITE_CUR':
//             return {
//                 ...state, favoriteCurData: action.payload.favoriteCurData
//             };
//         case 'REMOVE_FROM_FAVORITE':
//             return {
//                 ...state,
//                 favoriteCurData: action.payload.favoriteCurData,
//                 empty: action.empty
//             };
//         default:
//             return state;
//     }
// }

describe('curToFavorite', () => {
    test('should handle ADD_CUR_TO_FAVORITE', () => {
        expect(
            curToFavorite(
                {
                    favoriteCurData: [{
                        favoriteId: 'id1',
                        favoriteAbr: 'abr2',
                        dynamic: 'dynamic1',
                        selected: false,
                        new: true
                    }],
                    empty: true
                },
                {
                    type: types.ADD_CUR_TO_FAVORITE,
                    empty: false,
                    payload: {
                        favoriteId: 'id',
                        favoriteAbr: 'abr',
                        dynamic: 'dynamic',
                        selected: false,
                        new: true
                    }
                })
        ).toEqual(
            {
                favoriteCurData: [
                    {
                        favoriteId: 'id1',
                        favoriteAbr: 'abr2',
                        dynamic: 'dynamic1',
                        selected: false,
                        new: true
                    },
                    {
                        favoriteId: 'id',
                        favoriteAbr: 'abr',
                        dynamic: 'dynamic',
                        selected: false,
                        new: true
                    }],
                empty: false
            }
        );
    });
    test('should handle SELECT_FAVORITE_CUR', () => {
        expect(
            curToFavorite(
                {
                    favoriteCurData: [{
                        favoriteId: 'id1',
                        favoriteAbr: 'abr2',
                        dynamic: 'dynamic1',
                        selected: false,
                        new: true
                    }],
                    empty: true
                },
                {
                    type: types.SELECT_FAVORITE_CUR,
                    empty: false,
                    payload: {
                        favoriteCurData: [{
                            favoriteId: 'id1',
                            favoriteAbr: 'abr2',
                            dynamic: 'dynamic1',
                            selected: true,
                            new: true
                        }]
                    }
                })
        ).toEqual(
            {
                favoriteCurData: [
                    {
                        favoriteId: 'id1',
                        favoriteAbr: 'abr2',
                        dynamic: 'dynamic1',
                        selected: true,
                        new: true
                    }],
                empty: true
            }
        );
    });

    test('should handle REMOVE_FROM_FAVORITE', () => {
        expect(
            curToFavorite(
                {
                    favoriteCurData: [
                        {
                            favoriteId: 'id1',
                            favoriteAbr: 'abr2',
                            dynamic: 'dynamic1',
                            selected: false,
                            new: true
                        },
                        {
                            favoriteId: 'id',
                            favoriteAbr: 'abr',
                            dynamic: 'dynamic',
                            selected: false,
                            new: true
                        }],
                    empty: true
                },
                {
                    type: types.REMOVE_FROM_FAVORITE,
                    payload: {
                        favoriteCurData: [
                            {
                                favoriteId: 'id1',
                                favoriteAbr: 'abr2',
                                dynamic: 'dynamic1',
                                selected: false,
                                new: true
                            }]
                    },
                    empty: false
                })
        ).toEqual(
            {
                favoriteCurData: [
                    {
                        favoriteId: 'id1',
                        favoriteAbr: 'abr2',
                        dynamic: 'dynamic1',
                        selected: false,
                        new: true
                    }],
                empty: false
            }
        );
    });

});