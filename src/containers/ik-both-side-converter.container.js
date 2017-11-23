import { connect } from 'react-redux';
import { changeValue1 } from '../actions';
import { changeValue2 } from '../actions';
import { changeAbr1 } from '../actions';
import { changeAbr2 } from '../actions';


import { ConverterContainer } from '../components/converter-container';

const mapStateToProps = (state) => {
    return {
        currency: state.getCurrencies.cur,
        input1Abr: state.bothSideConverter.input1Abr,
        input2Abr: state.bothSideConverter.input2Abr,
        current1Rate: state.bothSideConverter.current1Rate,
        current2Rate: state.bothSideConverter.current2Rate,
        inputValue: state.bothSideConverter.inputValue,
        currentAbr: state.bothSideConverter.currentAbr

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeValue1: (target) => {
            dispatch(changeValue1(target));
        },
        changeValue2: (target) => {
            dispatch(changeValue2(target));
        },
        changeAbr1: (target, cur) => {
            dispatch(changeAbr1(target, cur));
        },
        changeAbr2: (target, cur) => {
            dispatch(changeAbr2(target, cur));
        }
    };
};

export const BothSideConverterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConverterContainer);

