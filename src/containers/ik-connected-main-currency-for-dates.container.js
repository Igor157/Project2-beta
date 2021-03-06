import { connect } from 'react-redux';
import { getDynamic } from '../actions';
import { changeStartDate } from '../actions';
import { changeEndDate } from '../actions';

import { CurrencyDynamicForDates } from '../components/currency-dynamic-for-dates';

const mapStateToProps = (state) => {
    return {
        dynamic: state.getDynamic.dynamic,
        choosenId: state.availableCurrencies.choosenId,
        choosenAbr: state.availableCurrencies.choosenAbr,
        startDate: state.changeDate.startDate,
        endDate: state.changeDate.endDate
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
        }
    };
};

export const ConnectedMainCurrencyDynamicForDates = connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrencyDynamicForDates);