export function curToFavorite(state = {}, action) {

    switch (action.type) {
        case 'ADD_CUR_TO_FAVORITE':
            return {
                ...state,
                favoriteCurData: [...state.favoriteCurData, action.payload],
                empty: action.empty
            };
        case 'SELECT_FAVORITE_CUR':
            return {
                ...state, favoriteCurData: action.payload.favoriteCurData
            };
        case 'REMOVE_FROM_FAVORITE':
            return {
                ...state,
                favoriteCurData: action.payload.favoriteCurData,
                empty: action.empty
            };
        default:
            return state;
    }
}