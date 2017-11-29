import { connect } from 'react-redux';
import { chooseCur } from '../actions';
import { getAvailableCur } from '../actions';
import { getFilterText } from '../actions';

import {CurrencyCalculator} from '../components/currency-calculator';


const mapStateToProps = (state) => {
  console.log(state.availableCurrencies.choosenAbr);
  return {
    currentAbr: state.availableCurrencies.choosenAbr,
    dynamic: state.getDynamic.dynamic,
    currency: state.getCurrencies.cur
  };
};



export const ConnectedCurrencyCalculator = connect(
  mapStateToProps
)(CurrencyCalculator);
