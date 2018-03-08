import React from 'react';
import renderer from 'react-test-renderer';
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

    it('+++ check Prop matches with initialState', () => {
        expect(wrapper.find(AvailableCurrencies).prop('filterText')).toEqual(initialState.availableCurrencies.filterText);
        expect(wrapper.find(AvailableCurrencies).prop('cur')).toEqual(initialState.getCurrencies.cur);
        expect(wrapper.find(AvailableCurrencies).prop('choosenId')).toEqual(initialState.availableCurrencies.choosenId);
    });

    it('+++ check action on dispatching ', () => {
        console.log(wrapper.find('.ik-available-currencies__row').at(0));
        wrapper.find('.ik-available-currencies__row').at(0).simulate('click');
        let action = store.getActions();
        console.log(action);
        expect(action[0].type).toBe('GET_CUR_REQUEST');
        expect(action[1].type).toBe('GET_CUR_SUCCESS');
        expect(action[2].type).toBe('CHANGE_CUR_FOR_DYNAMIC');
    });

});
