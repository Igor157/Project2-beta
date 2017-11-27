import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ik-currency-page.style.css';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

import { Navigation } from '../navigation/ik-navigation.component.js';
// import { Search } from '../search/ik-search.component.js'
// import { AvaibleCurrencies } from '../avaible-currencies';
// import { CurrencyDateTable } from '../currency-date-table/ik-currency-date-table.component.js';
import { ConverterButton } from '../converter-button/ik-converter-button.component.js';
import { ConverterContainer } from '../converter-container/ik-converter-container.component.js';
import { ChooseAvaibleCurrencies } from '../../containers/ik-choose-avaible-currencies.container.js';
import { FilterSearch } from '../../containers/ik-filter-search.container.js';
import { ChangeableCurrencyDateTable } from '../../containers/ik-changeable-currency-date-table.container.js';
import { BothSideConverterContainer } from '../../containers/ik-both-side-converter.container.js';
import { EmptyTemplate } from '../../components/empty-template';
import { ConnectedCurrencyCalculator } from '../../containers/ik-connected-currency-calculator.container.js';
import { About } from '../about';
import { CurrencyDynamicForDates } from '../currency-dynamic-for-dates';
import { ConnectedCurrencyDynamicForDates } from '../../containers/ik-connected-currency-for-dates.container.js';
import {ConnectedNavigation} from '../../containers/connected-navigation.js';

export class CurrencyPage extends React.Component {

  render() {
    return (
      <Route
        path='/'
        render={() =>
          <div className="ik-currency-page">
            <Switch>
              <Route
                path='/about'
                render={() => <FilterSearch
                  className="ik-currency-page__search ik-currency-page__search--unvizible"
                />}
              />
              <Route
                path='/favorite'
                render={() => <FilterSearch
                  className="ik-currency-page__search ik-currency-page__search--unvizible"
                />}
              />
              <Route
                path='/'
                render={() => <FilterSearch
                  className="ik-currency-page__search ik-currency-page__search"
                />}
              />
            </Switch>
            <ConnectedNavigation
              className="ik-currency-page__navigation"
            />
            <Switch>
              <Route
                exact path='/'
                render={() => <ChooseAvaibleCurrencies
                  className="ik-currency-page__avaible-currencies"
                />}
              />
              <Route
                path='/calculator'
                render={() => <ChooseAvaibleCurrencies
                  className="ik-currency-page__avaible-currencies"
                />}
              />
            </Switch>
            <Switch>
              <Route
                path='/calculator'
                render={() => <ConnectedCurrencyCalculator
                  className="ik-currency-page__info-place"
                />}
              />
              <Route
                exact path='/'
                render={() => <ConnectedCurrencyDynamicForDates
                  className="ik-currency-page__info-place"
                />}
              />
              <Route
                path='/favorite'
                render={() => <EmptyTemplate
                />}
              />
              <Route
                path='/about'
                render={() =>
                  <About
                  />
                }
              />
            </Switch>
          </div>
        }
      />
    );
  }
}

