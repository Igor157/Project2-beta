import { connect } from 'react-redux';
import { getDynamic } from '../actions';
import {CurrencyCalculator} from '../components/currency-calculator';

const mapStateToProps = (state) => {
  return {
    currentAbr: state.availableCurrencies.choosenAbr,
    choosenId: state.availableCurrencies.choosenId,
    dynamic: state.getDynamic.dynamic,
    currency: state.getCurrencies.cur
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      getDynamic: (id, start, end) => {
          dispatch(getDynamic(id, start, end));
      }
  };
};

export const ConnectedCurrencyCalculator = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyCalculator);
