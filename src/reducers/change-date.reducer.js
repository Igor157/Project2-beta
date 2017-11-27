export function changeDate(state = {}, action) {

    switch (action.type) {
        case 'CHANGE_START_DATE':
            return { ...state, startDate: action.payload.startDate };
        case 'CHANGE_END_DATE':
            return { ...state, endDate: action.payload.endDate };
        default:
            return state;
    }
}