import { connect } from 'react-redux';
import { chooseCur } from '../actions';
import { getAvaibleCur } from '../actions';
import { getFilterText } from '../actions';

import {CurrencyDateTable} from '../components/currency-date-table';


const mapStateToProps = (state) => {
  return {
    abr: state.avaibleCurrencies.choosenAbr,
    dynamic: state.getDynamic.dynamic
  };
};


export const ChangeableCurrencyDateTable = connect(
  mapStateToProps
)(CurrencyDateTable);

