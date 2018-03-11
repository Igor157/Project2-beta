import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';
import { configure, shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import * as actions from '../src/actions';
import { Search } from '../src/components/search';
import { FilterSearch } from '../src/containers/ik-filter-search.container';
import { About } from '../src/components/about';
import { AvailableCurrencies } from '../src/components/available-currencies';
import { ChooseAvailableCurrencies } from '../src/containers/ik-choose-available-currencies.container';
// import { requestServices } from '../src/services/Services.js';
import { CurrencyCalculator } from '../src/components/currency-calculator';
import { ConnectedCurrencyCalculator } from '../src/containers/ik-connected-currency-calculator.container';
import { CurrencyDynamicForDates } from '../src/components/currency-dynamic-for-dates';
import {CurrencyGraph} from '../src/components/currency-graph';
import {ConnectedMainCurrencyDynamicForDates} from '../src/containers/ik-connected-main-currency-for-dates.container';

import thunk from 'redux-thunk';
const middlewares = [thunk];
configure({ adapter: new Adapter() });



test('Snapshot test of Search', () => {
    const component = renderer.create(
        <Search filterText='USD' />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

describe('FilterSearch container should map states and dispatch actions', () => {
    const initialState = { availableCurrencies: { filterText: 'USD' } };
    const mockStore = configureStore(middlewares);
    let store, wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(<Provider store={store}><FilterSearch /></Provider>);
    });


    test('+++ render the connected(SMART) component', () => {
        expect(wrapper.find(FilterSearch).length).toEqual(1);
    });

    test('+++ check Prop matches with initialState', () => {
        expect(wrapper.find(Search).prop('filterText')).toEqual(initialState.availableCurrencies.filterText);
    });

    test('+++ check action on dispatching ', () => {
        wrapper.find('.ik-search__search-place').simulate('change');
        let action = store.getActions();
        expect(action[0].type).toBe('FILTER_AVAILABLE_CUR');
    });

});

test('Snapshot test of About', () => {
    const component = renderer.create(
        <About />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

let mockCur = [{
    curAbr: "AUD",
    curRate: 1.5285,
    date: "March 8th 2018",
    curId: 170,
    curName: "",
    startDate: "",
    endDate: "",
    curScale: 1,
    curDifference: 0.0030999999999998806
},
{
    curAbr: "BGN",
    curRate: 1.2443,
    date: "March 8th 2018",
    curId: 191,
    curName: "",
    startDate: "",
    endDate: "",
    curScale: 1,
    curDifference: 0.0043999999999999595
},
{
    curAbr: "UAH",
    curRate: 7.5032,
    date: "March 8th 2018",
    curId: 290,
    curName: "",
    startDate: "",
    endDate: "",
    curScale: 100,
    curDifference: 0.036399999999999544
}];

test('Snapshot test of AvailableCurrencies', () => {
    jest.mock('../src/actions/index');
    const component = renderer.create(
        <AvailableCurrencies
            className='ik-currency-page__available-currencies'
            cur={mockCur}
            getCur={jest.fn()}
        />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

jest.mock('../src/actions/index');

describe('ChooseAvailableCurrencies container should map states and dispatch actions', () => {
    const initialState = {
        getCurrencies: {
            cur: mockCur
        },
        availableCurrencies: {
            filterText: '',
            choosenId: '145'
        }
    };
    const mockStore = configureStore(middlewares);
    let store, wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(<Provider store={store}>
            <ChooseAvailableCurrencies
                className='ik-currency-page__available-currencies'
            />
        </Provider>);
    });
    test('+++ render the connected(SMART) component', () => {
        expect(wrapper.find(ChooseAvailableCurrencies).length).toEqual(1);
    });

    test('+++ check Prop matches with initialState', () => {
        expect(wrapper.find(AvailableCurrencies).prop('filterText')).toEqual(initialState.availableCurrencies.filterText);
        expect(wrapper.find(AvailableCurrencies).prop('cur')).toEqual(initialState.getCurrencies.cur);
        expect(wrapper.find(AvailableCurrencies).prop('choosenId')).toEqual(initialState.availableCurrencies.choosenId);
    });

    test('+++ check action on dispatching ', () => {
        wrapper.find('.ik-available-currencies__row').at(0).simulate('click');
        let action = store.getActions();
        expect(action[0].type).toBe('GET_CUR_REQUEST');
        expect(action[1].type).toBe('GET_CUR_SUCCESS');
        expect(action[2].type).toBe('CHANGE_CUR_FOR_DYNAMIC');
    });

});


describe('CurrencyCalculator should render Empty if there are not choosen abr and calculator+graph if abr chosen', () => {
    test('render Empty', () => {
        let wrapper = shallow(
            <CurrencyCalculator
            />);
        expect(wrapper.find('EmptyTemplate').length).toEqual(1);

    });
    test('render calculator+graph', () => {
        let wrapper = shallow(
            <CurrencyCalculator
                currentAbr='USD'
            />);
        expect(wrapper.find('OneSideConverterContainer').length).toEqual(1);
        expect(wrapper.find('CurrencyGraph').length).toEqual(1);
    });
});

let mockDynamic = [{
    curAbr: "",
    curRate: 5.901,
    date: "February 8th 2018",
    curId: 293,
    curName: "",
    startDate: "",
    endDate: "",
    curScale: ""
},
{
    curAbr: "",
    curRate: 5.8549,
    date: "February 9th 2018",
    curId: 293,
    curName: "",
    startDate: "",
    endDate: "",
    curScale: ""
},
{
    curAbr: "",
    curRate: 5.8492,
    date: "February 10th 2018",
    curId: 293,
    curName: "",
    startDate: "",
    endDate: "",
    curScale: ""
}];

describe('ConnectedCurrencyCalculator container should map states and dispatch actions', () => {
    const initialState = {
        getCurrencies: {
            cur: mockCur
        },
        availableCurrencies: {
            choosenAbr: 'USD',
            choosenId: '145'
        },
        getDynamic: {
            dynamic: mockDynamic
        }
    };
    const mockStore = configureStore(middlewares);
    let store, wrapper;
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(<Provider store={store}>
            <ConnectedCurrencyCalculator
            />
        </Provider>);
    });
    test('+++ render the connected(SMART) component', () => {
        expect(wrapper.find(ConnectedCurrencyCalculator).length).toEqual(1);
    });

    test('+++ check Prop matches with initialState', () => {
        expect(wrapper.find(CurrencyCalculator).prop('dynamic')).toEqual(initialState.getDynamic.dynamic);
        expect(wrapper.find(CurrencyCalculator).prop('currency')).toEqual(initialState.getCurrencies.cur);
        expect(wrapper.find(CurrencyCalculator).prop('choosenId')).toEqual(initialState.availableCurrencies.choosenId);
        expect(wrapper.find(CurrencyCalculator).prop('currentAbr')).toEqual(initialState.availableCurrencies.choosenAbr);
    });

    test('+++ check action on dispatching ', () => {
        let action = store.getActions();
        expect(action[0].type).toBe('GET_DYNAMIC_REQUEST');
        expect(action[1].type).toBe('GET_DYNAMIC_SUCCESS');
    });

});

jest.mock('../src/components/currency-graph');

test('Snapshot test of CurrencyDynamicForDates', function () {
    CurrencyGraph.mockReturnValue(<div></div>);
    const component = renderer.create(
        <CurrencyDynamicForDates
            dynamic={mockDynamic}
            choosenId={170}
            choosenAbr='AUD'
            startDate='2018-02-08T17:52:13.164Z'
            endDate='2018-03-10T17:52:13.151Z'
            getDynamic={jest.fn()}
            changeStartDate={jest.fn()}
            changeEndDate={jest.fn()}
        />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

describe('ConnectedMainCurrencyDynamicForDates container should map states and dispatch actions', () => {
    const initialState = {
        availableCurrencies: {
            choosenAbr: 'AUD',
            choosenId: '170'
        },
        getDynamic: {
            dynamic: mockDynamic
        },
        changeDate: {
            startDate: '2018-02-08T17:52:13.164Z',
            endDate: '2018-03-10T17:52:13.151Z'
        }
    };
    const mockStore = configureStore(middlewares);
    let store, wrapper;
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(<Provider store={store}>
            <ConnectedMainCurrencyDynamicForDates
            />
        </Provider>);
    });
    test('+++ render the connected(SMART) component', () => {
        expect(wrapper.find(ConnectedMainCurrencyDynamicForDates).length).toEqual(1);
    });

    test('+++ check Prop matches with initialState', () => {
        expect(wrapper.find(CurrencyDynamicForDates).prop('dynamic')).toEqual(initialState.getDynamic.dynamic);
        expect(wrapper.find(CurrencyDynamicForDates).prop('choosenId')).toEqual(initialState.availableCurrencies.choosenId);
        expect(wrapper.find(CurrencyDynamicForDates).prop('choosenAbr')).toEqual(initialState.availableCurrencies.choosenAbr);
        expect(wrapper.find(CurrencyDynamicForDates).prop('startDate')).toEqual(initialState.changeDate.startDate);
        expect(wrapper.find(CurrencyDynamicForDates).prop('endDate')).toEqual(initialState.changeDate.endDate);
    });

    test('+++ check action on dispatching ', () => {
        wrapper.find('input').last().simulate('select');
        let action = store.getActions();
        expect(action[0].type).toBe('GET_DYNAMIC_REQUEST');
        expect(action[1].type).toBe('GET_DYNAMIC_SUCCESS');
        expect(action[2].type).toBe('CHANGE_END_DATE');
        expect(action[3].type).toBe('CHANGE_START_DATE');
    });

});




// describe('CurrencyDynamicForDates should render Empty if there are not choosen abr and calculator+graph if abr chosen', () => {
//     test('render Empty', () => {
//         let wrapper = shallow(
//             <CurrencyDynamicForDates
//             dynamic={mockDynamic}
//             choosenId={170}
//             choosenAbr='AUD'
//             startDate=
//             endDate=
//             />);
//         expect(wrapper.find('EmptyTemplate').length).toEqual(1);

//     });
//     test('render calculator+graph', () => {
//         let wrapper = shallow(
//             <CurrencyCalculator
//                 currentAbr='USD'
//             />);
//         expect(wrapper.find('OneSideConverterContainer').length).toEqual(1);
//         expect(wrapper.find('CurrencyGraph').length).toEqual(1);
//     });
// });