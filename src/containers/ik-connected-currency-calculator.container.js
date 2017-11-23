import { connect } from 'react-redux';
import { chooseCur } from '../actions';
import { getAvaibleCur } from '../actions';
import { getFilterText } from '../actions';

import {CurrencyCalculator} from '../components/currency-calculator';


const mapStateToProps = (state) => {
  console.log(state.avaibleCurrencies.choosenAbr);
  return {
    currentAbr: state.avaibleCurrencies.choosenAbr,
    dynamic: state.getDynamic.dynamic,
    currency: state.getCurrencies.cur
  };
};



export const ConnectedCurrencyCalculator = connect(
  mapStateToProps
)(CurrencyCalculator);
