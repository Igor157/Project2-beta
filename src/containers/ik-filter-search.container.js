import { connect } from 'react-redux';
import { chooseCur } from '../actions';
import { getAvaibleCur } from '../actions'
import { filterCur } from '../actions'

import {Search} from '../components/search';


const mapStateToProps = (state) => {
  return {
    pageElementClass: state.searchClass,
    value: state.filterText
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterTextChange: (target) => {
      dispatch(filterCur(target))
    }
  }
};

export const FilterSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

