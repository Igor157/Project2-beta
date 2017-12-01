import { connect } from 'react-redux';
import { addCurToFavorite } from '../actions';
import { SaveToFavoriteButton } from '../components/save-to-favorite-button';

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCurToFavorite: () => {
            dispatch(addCurToFavorite());
        }
    };
};

export const ConnectedSaveToFavoriteButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(SaveToFavoriteButton);