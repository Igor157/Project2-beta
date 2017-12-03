const initialState = {};

export function getInfo(state = initialState, action) {
    switch (action.type) {
        case 'GET_INFO_REQUEST':
            return { ...state, fetching: true };
        case 'GET_INFO_SUCCESS':
            return { ...state, info: action.payload, fetching: false };
        default:
            return state;
    }
}