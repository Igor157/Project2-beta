import { connect } from 'react-redux';
import { chooseCur } from '../actions';
import { getCur } from '../actions';
import { getFilterText } from '../actions';
import {initialize} from '../actions';

import {AvaibleCurrencies} from '../components/avaible-currencies';

// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed)
//   }
// }

const mapStateToProps = (state) => {
  return {
    // pageElementClass: state.class,
    cur: state.getCurrencies.cur,
    filterText: state.filterText
    // todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clickHandler: (target) => {
      dispatch(chooseCur(target))
    },
    getCur: () => {
      dispatch(getCur())
    },
    initialize: () => {
      dispatch(initialize())
    }
  }
}

export const ChooseAvaibleCurrencies = connect(
  mapStateToProps,
  mapDispatchToProps
)(AvaibleCurrencies)

