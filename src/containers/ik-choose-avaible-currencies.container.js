import { connect } from 'react-redux';
import { getCur } from '../actions';
import {getDynamic} from '../actions';
import {changeCurForDynamic} from '../actions';
import { getFilterText } from '../actions';
import {AvaibleCurrencies} from '../components/avaible-currencies';

const mapStateToProps = (state) => {
  return {
    cur: state.getCurrencies.cur,
    filterText: state.avaibleCurrencies.filterText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurForDynamic: (target) => {
      dispatch(changeCurForDynamic(target));
    },
    getCur: () => {
      dispatch(getCur());
    },
    getDynamic: (target) => {
      dispatch(getDynamic(target));
    }
  };
};

export const ChooseAvaibleCurrencies = connect(
  mapStateToProps,
  mapDispatchToProps
)(AvaibleCurrencies);

