import { connect } from 'react-redux';
import { getCur } from '../actions';
import { getDynamic } from '../actions';
import { changeStartDate } from '../actions';
import { changeEndDate } from '../actions';

import { CurrencyDynamicForDates } from '../components/currency-dynamic-for-dates';
import { addCurToFavorite } from '../actions';

const mapStateToProps = (state) => {
    return {
        dynamic: state.getDynamic.dynamic,
        choosenId: state.avaibleCurrencies.choosenId,
        choosenAbr: state.avaibleCurrencies.choosenAbr,
        startDate: state.changeDate.startDate,
        endDate: state.changeDate.endDate,
        favoriteCurData: state.curToFavorite.favoriteCurData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getDynamic: (target, start, end) => {
            dispatch(getDynamic(target, start, end));
        },
        changeStartDate: (date) => {
            dispatch(changeStartDate(date));
        },
        changeEndDate: (date) => {
            dispatch(changeEndDate(date));
        },
        addCurToFavorite: (abr, id, dynamic, favoriteFirst) => {
            dispatch(addCurToFavorite(abr, id, dynamic, favoriteFirst));
        }
    };
};

export const ConnectedCurrencyDynamicForDates = connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrencyDynamicForDates);