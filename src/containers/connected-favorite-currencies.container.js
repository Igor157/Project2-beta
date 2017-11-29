import { connect } from 'react-redux';
import { chooseCur } from '../actions';
import { getAvailableCur } from '../actions';
import { filterAvailableCur } from '../actions';
import {selectFavoriteCur} from '../actions';
import {removeFromFavorite} from '../actions';

import { FavoriteCurrencies } from '../components/favorite-currencies';


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

export const ConnectedFavoriteCurrencies = connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoriteCurrencies);