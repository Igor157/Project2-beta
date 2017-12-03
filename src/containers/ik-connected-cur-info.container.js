import { connect } from 'react-redux';
import { getInfo } from '../actions';


import { CurInfo } from '../components/cur-info';

const mapStateToProps = (state) => {
    return {
        info: state.getInfo.info,
        choosenId: state.curToFavorite.favoriteCurData.filter((item) => {
            return item.selected === true;
        })[0].favoriteId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getInfo: (id) => {
            dispatch(getInfo(id));
        }
    };
};

export const ConnectedCurInfo = connect(
    mapStateToProps,
    mapDispatchToProps
)(CurInfo);