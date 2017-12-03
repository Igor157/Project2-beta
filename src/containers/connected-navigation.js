import { connect } from 'react-redux';
import { Navigation } from '../components/navigation';


const mapStateToProps = (state) => {
    let maxcount = 9;
    return {
        counter: state.curToFavorite.favoriteCurData.length <= maxcount ?
            state.curToFavorite.favoriteCurData.length :
            `${maxcount}+`

    };
};
export const ConnectedNavigation = connect(
    mapStateToProps
)(Navigation);