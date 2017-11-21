// const initialState = {
//   year: 2016,
//   photos: []
// }


export function avaibleCurrencies(state = {}, action) {

  switch (action.type) {
    case 'FILTER_CUR':
      return { ...state, filterText: action.payload }
    case 'CHOOSE_CUR':
      return { ...state, choosenId: action.payload.id, choosenAbr:abr}

    default:
      return state;
  }

}