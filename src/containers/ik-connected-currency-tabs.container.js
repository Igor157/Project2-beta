import { connect } from 'react-redux';
import {selectFavoriteCur} from '../actions';
import {removeFromFavorite} from '../actions';

import { CurrencyTabs } from '../components/currency-tabs';


const mapStateToProps = (state) => {
    return {
        favoriteCurData: state.curToFavorite.favoriteCurData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectFavoriteCur: (id) => {
            dispatch(selectFavoriteCur(id));
        },
        removeFromFavorite: (id) => {
            dispatch(removeFromFavorite(id));
        }
    };
};

export const ConnectedCurrencyTabs = connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrencyTabs);