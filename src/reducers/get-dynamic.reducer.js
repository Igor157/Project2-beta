const initialState = {};

export function getDynamic(state = initialState, action) {
    switch (action.type) {
        case "GET_DYNAMIC_REQUEST":
            return { ...state, fetching: true }
        case "GET_DYNAMIC_SUCCESS":
            return { ...state, dynamic: action.payload, fetching: false }
        default:
            return state;
    }
}
