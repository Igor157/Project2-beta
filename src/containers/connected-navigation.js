import { connect } from 'react-redux';
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