import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import * as actions from '../src/actions';
import { Search } from '../src/components/search';
import { FilterSearch } from '../src/containers/ik-filter-search.container';
import { About } from '../src/components/about';
import { AvailableCurrencies } from '../src/components/available-currencies';
import { ChooseAvailableCurrencies } from '../src/containers/ik-choose-available-currencies.container';
// import { requestServices } from '../src/services/Services.js';

import thunk from 'redux-thunk';
const middlewares = [thunk];



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

// test('Snapshot test of AvailableCurrencies', () => {
//     jest.mock('../src/actions/index');
//     const component = renderer.create(
//         <AvailableCurrencies
//             className='ik-currency-page__available-currencies' cur={[]} filterText=''
//             choosenId='choosenId'
//             />
//     );
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// });

jest.mock('../src/actions/index');

describe('ChooseAvailableCurrencies container should map states and dispatch actions',()=>{
    const initialState = {getCurrencies: {cur: [{
        "Cur_ID": 170,
        "Date": "2018-02-20T00:00:00",
        "Cur_Abbreviation": "AUD",
        "Cur_Scale": 1,
        "Cur_Name": "Австралийский доллар",
        "Cur_OfficialRate": 1.5533
    },
    {
        "Cur_ID": 191,
        "Date": "2018-02-20T00:00:00",
        "Cur_Abbreviation": "BGN",
        "Cur_Scale": 1,
        "Cur_Name": "Болгарский лев",
        "Cur_OfficialRate": 1.2443
    }]},
    availableCurrencies: {
        filterText: '',
        choosenId: '145'}};
    const mockStore = configureStore(middlewares);
    let store,wrapper;

    beforeEach(()=>{
        store = mockStore(initialState);
        wrapper = mount( <Provider store={store}><ChooseAvailableCurrencies /></Provider> );
    });


    test('+++ render the connected(SMART) component', () => {
       expect(wrapper.find(ChooseAvailableCurrencies).length).toEqual(1);
    });

    // it('+++ check Prop matches with initialState', () => {
    //    expect(wrapper.find(Search).prop('filterText')).toEqual(initialState.availableCurrencies.filterText);
    // });

    // it('+++ check action on dispatching ', () => {
    //     wrapper.find('.ik-search__search-place').simulate('change');
    //     let action = store.getActions();
    //     expect(action[0].type).toBe('FILTER_AVAILABLE_CUR');
    // });

});
