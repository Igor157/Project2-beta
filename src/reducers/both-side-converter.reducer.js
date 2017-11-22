export function bothSideConverter(state = {}, action) {

    switch (action.type) {
        case 'CHANGE_VALUE_1':
            return { ...state, inputValue: action.payload.inputValue, currentAbr: state.input1Abr }
        case 'CHANGE_VALUE_2':
            return { ...state, inputValue: action.payload.inputValue, currentAbr: state.input2Abr }
        case 'CHANGE_ABR_1':
            return { ...state, input1Abr: action.payload.input1Abr, current1Rate: action.payload.current1Rate }
        case 'CHANGE_ABR_2':
            return { ...state, input2Abr: action.payload.input2Abr, current2Rate: action.payload.current2Rate }
        default:
            return state;
    }
}

