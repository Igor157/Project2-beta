export function curToFavorite(state = {}, action) {

    switch (action.type) {
        case 'ADD_CUR_TO_FAVORITE':
            return { ...state, favoriteCurData: [...state.favoriteCurData, action.payload] };

        default:
            return state;
    }
}