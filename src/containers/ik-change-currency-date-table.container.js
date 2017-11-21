import { connect } from 'react-redux';
import { chooseCur } from '../actions';
import { getAvaibleCur } from '../actions'
import { getFilterText } from '../actions'

import CurrencyDateTable from '../components/currency-date-table';


const mapStateToProps = (state) => {
  return {
    abr: state.abr,
    dynamic: state.dynamic
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onFilterTextChange: (target) => {
//       dispatch(filterCur(target))
//     }
//   }
// };

const reloadCurrencyDateTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyDateTable);

export default reloadCurrencyDateTable;