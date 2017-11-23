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

export class CurrencyPage extends React.Component {

  render() {
    return (
      <Switch>
        <Route
          path='/about'
          render={() => <EmptyTemplate
          />}
        />
        <Route
          path='/favorite'
          render={() => <EmptyTemplate
          />}
        />
        <Route
          path='/'
          render={() =>
            <div className="ik-currency-page">
              <FilterSearch
                className="ik-currency-page__search"
              />
              <Navigation
                className="ik-currency-page__navigation"
              />
              <ChooseAvaibleCurrencies
                className="ik-currency-page__avaible-currencies"
              />
              <Switch>
                <Route
                  path='/calculator'
                  render={() => <ConnectedCurrencyCalculator
                    className="ik-currency-page__info-place"
                  />}
                />
                <Route
                  path='/'
                  render={() => <ChangeableCurrencyDateTable
                    className="ik-currency-page__info-place"
                  />}
                />
              </Switch>
            </div>
          }
        />
      </Switch>
    );
  }
}

