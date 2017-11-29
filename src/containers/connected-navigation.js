import { connect } from 'react-redux';
import { chooseCur } from '../actions';
import { getAvailableCur } from '../actions';
import { getFilterText } from '../actions';

import { Navigation } from '../components/navigation';


const mapStateToProps = (state) => {
    return {
        counter: state.curToFavorite.favoriteCurData.length <= 9 ?
            state.curToFavorite.favoriteCurData.length :
            "9+"

    };
};
export const ConnectedNavigation = connect(
    mapStateToProps
)(Navigation);