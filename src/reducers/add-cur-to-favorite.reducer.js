export function curToFavorite(state = {}, action) {

    switch (action.type) {
        case 'ADD_CUR_TO_FAVORITE':
            return { ...state, favoriteCurData: [...state.favoriteCurData, action.payload] };
        case 'SELECT_FAVORITE_CUR':
            return {
                ...state, favoriteCurData: state.favoriteCurData.map((item) => {
                    if (item.favoriteId === action.payload.id) {
                        return { ...item, new: action.payload.new, selected: action.payload.selected };
                    }
                    else {
                        return { ...item, selected: false };
                    }
                })
            };
        case 'REMOVE_FROM_FAVORITE':
            return {
                ...state, favoriteCurData: state.favoriteCurData.filter(item => {
                    return item.favoriteId !== action.payload.id;
                }
                )
            };
        default:
            return state;
    }
}