const initialState = {};

export function getCurrencies(state = initialState, action) {

    switch (action.type) {
        case "GET_CUR_REQUEST":
            return { ...state, fetching: true }
        case "GET_CUR_SUCCESS":
            return { ...state, cur: action.payload, fetching: false }
        default:
            return state;
    }
}


