import { connect } from 'react-redux';
import { chooseCur } from '../actions';
import { getAvailableCur } from '../actions';
import { filterAvailableCur } from '../actions';

import {Search} from '../components/search';


const mapStateToProps = (state) => {
  return {
    filterText: state.availableCurrencies.filterText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterTextChange: (target) => {
      dispatch(filterAvailableCur(target));
    }
  };
};

export const FilterSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

