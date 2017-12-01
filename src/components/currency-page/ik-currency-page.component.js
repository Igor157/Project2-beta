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
// import { AvailableCurrencies } from '../available-currencies';
// import { CurrencyDateTable } from '../currency-date-table/ik-currency-date-table.component.js';
import { ConverterButton } from '../converter-button/ik-converter-button.component.js';
import { ConverterContainer } from '../converter-container/ik-converter-container.component.js';
import { ChooseAvailableCurrencies } from '../../containers/ik-choose-available-currencies.container.js';
import { FilterSearch } from '../../containers/ik-filter-search.container.js';
import { ChangeableCurrencyDateTable } from '../../containers/ik-changeable-currency-date-table.container.js';
import { BothSideConverterContainer } from '../../containers/ik-both-side-converter.container.js';
import { EmptyTemplate } from '../../components/empty-template';
import { ConnectedCurrencyCalculator } from '../../containers/ik-connected-currency-calculator.container.js';
import { About } from '../about';
import { CurrencyDynamicForDates } from '../currency-dynamic-for-dates';
import { ConnectedCurrencyDynamicForDates } from '../../containers/ik-connected-currency-for-dates.container.js';
import { ConnectedNavigation } from '../../containers/connected-navigation.js';
import { ConnectedFavoriteCurrencies } from '../../containers/connected-favorite-currencies.container.js';
import {ConnectedSaveableCurrencyDynamic} from '../../components/saveable-currency-dynamic';
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
                  className="ik-currency-page__search"
                />}
              />
            </Switch>
            <ConnectedNavigation
              className="ik-currency-page__navigation"
            />
            <Switch>
              <Route
                exact path='/'
                render={() => <ChooseAvailableCurrencies
                  className="ik-currency-page__available-currencies"
                />}
              />
              <Route
                path='/calculator'
                render={() => <ChooseAvailableCurrencies
                  className="ik-currency-page__available-currencies"
                />}
              />
            </Switch>
            <Switch>
              <Route
                path='/calculator'
                render={() => <ConnectedCurrencyCalculator
                  className="ik-currency-page__currency-calculator"
                />}
              />
              <Route
                exact path='/'
                render={() => <ConnectedSaveableCurrencyDynamic
                  className="ik-currency-page__saveable-currency-dynamic"
                />}
              />
              <Route
                path='/favorite'
                render={() => <ConnectedFavoriteCurrencies
                  className="ik-currency-page__favorite-currencies"
                />}
              />
              <Route
                path='/about'
                render={() =>
                  <About
                  className="ik-currency-page__about"
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

