import { connect } from 'react-redux';
import { chooseCur } from '../actions';
import { getAvaibleCur } from '../actions';
import { filterAvaibleCur } from '../actions';

import {Search} from '../components/search';


const mapStateToProps = (state) => {
  return {
    filterText: state.avaibleCurrencies.filterText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterTextChange: (target) => {
      dispatch(filterAvaibleCur(target));
    }
  };
};

export const FilterSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

