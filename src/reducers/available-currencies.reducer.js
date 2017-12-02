
export function availableCurrencies(state = {}, action) {

  switch (action.type) {
    case 'FILTER_AVAILABLE_CUR':
      return { ...state, filterText: action.payload.filterText };
    case 'CHANGE_CUR_FOR_DYNAMIC':
    return { ...state, choosenId: action.payload.changedId, choosenAbr: action.payload.changedAbr };

    default:
      return state;
  }
}
