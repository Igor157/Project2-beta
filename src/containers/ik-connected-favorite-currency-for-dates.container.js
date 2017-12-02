import { connect } from 'react-redux';
import { getCur } from '../actions';
import { getDynamic } from '../actions';
import { changeStartDate } from '../actions';
import { changeEndDate } from '../actions';

import { CurrencyDynamicForDates } from '../components/currency-dynamic-for-dates';

const mapStateToProps = (state) => {
    return {
        dynamic: state.getDynamic.dynamic,
        choosenId: state.curToFavorite.favoriteCurData.filter((item) => {return item.selected === true; })[0].favoriteId,
        startDate: state.changeDate.startDate,
        endDate: state.changeDate.endDate
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getDynamic: (id, start, end) => {
            dispatch(getDynamic(id, start, end));
        },
        changeStartDate: (date) => {
            dispatch(changeStartDate(date));
        },
        changeEndDate: (date) => {
            dispatch(changeEndDate(date));
        }
    };
};

export const ConnectedFavoriteCurrencyDynamicForDates = connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrencyDynamicForDates);