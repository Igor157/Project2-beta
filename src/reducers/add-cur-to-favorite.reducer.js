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
                ...state,
                favoriteCurData: state.favoriteCurData.map((item) => {
                    if (item.favoriteId === action.payload.id) {
                        return { ...item, new: action.payload.new, selected: action.payload.selected };
                    }
                    else {
                        return { ...item, selected: false };
                    }
                })
            };
        case 'REMOVE_FROM_FAVORITE':
            let theRestOfFavorite = state.favoriteCurData.filter(item => {
                return item.favoriteId !== action.payload.id;
            });
            if (theRestOfFavorite.length !== 0) {
                theRestOfFavorite[0].selected = true;
            }
            return {
                ...state,
                favoriteCurData: theRestOfFavorite,
                empty: theRestOfFavorite.length === 0 ? true : false
            };
        default:
            return state;
    }
}