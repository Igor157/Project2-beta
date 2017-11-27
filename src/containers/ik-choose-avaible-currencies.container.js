import { connect } from 'react-redux';
import { getCur } from '../actions';
import { getDynamic } from '../actions';
import { changeCurForDynamic } from '../actions';
import { getFilterText } from '../actions';
import { AvaibleCurrencies } from '../components/avaible-currencies';

const mapStateToProps = (state) => {
  return {
    cur: state.getCurrencies.cur,
    filterText: state.avaibleCurrencies.filterText,
    startDate: state.changeDate.startDate,
    endDate: state.changeDate.endDate
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurForDynamic: (id, abr) => {
      dispatch(changeCurForDynamic(id, abr));
    },
    getCur: () => {
      dispatch(getCur());
    },
    getDynamic: (target, start, end) => {
      dispatch(getDynamic(target, start, end));
    }
  };
};

export const ChooseAvaibleCurrencies = connect(
  mapStateToProps,
  mapDispatchToProps
)(AvaibleCurrencies);

