
export function avaibleCurrencies(state = {}, action) {

  switch (action.type) {
    case 'FILTER_AVAIBLE-CUR':
      return { ...state, filterText: action.payload.filterText }
    case 'CHANGE_CUR_FOR_DYNAMIC':
      return { ...state, choosenId: action.payload.id, choosenAbr: action.payload.changedAbr}

    default:
      return state;
  }
}