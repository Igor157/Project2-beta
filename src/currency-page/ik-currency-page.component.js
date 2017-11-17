import React from "react";
import ReactDOM from "react-dom";
import styles from './ik-currency-page.style.css';

import { Navigation } from '../navigation/ik-navigation.component.js';
import { Search } from '../search/ik-search.component.js'
import { AvaibleCurrencies } from '../avaible-currencies';
import { CurrencyDateTable } from '../currency-date-table/ik-currency-date-table.component.js';
import { ConverterButton } from '../converter-button/ik-converter-button.component.js';
import { ConverterContainer } from '../converter-container/ik-converter-container.component.js';
import { services } from '../Services/Services.js';
import { requestServices } from '../Services/Services.js';

export class CurrencyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.currencyOnclick = this.currencyOnclick.bind(this);
    this.onFilterTextChange = this.onFilterTextChange.bind(this);
  }
  currencyOnclick(target) {
    this.setState({ id: target.abr });
    let dynamicForId = requestServices.getDynamicForCurId(target.getAttribute("id"));
    dynamicForId
      .then((data) => {
        this.setState({ dynamic: data, abr: target.getAttribute("abr")})
      });
  }
  onFilterTextChange(target) {
    this.setState({ filterText: target });
  }
  componentDidMount() {
    let todaysCurPromise = requestServices.getTodaysCurrencies();
    todaysCurPromise
      .then(data => {
        this.setState({ cur: data })
      });

  }
  render() {
    return (
      <div className="ik-currency-page">
        <Search
          className="ik-currency-page__search"
          onFilterTextChange={this.onFilterTextChange}
          filterText={this.state.filterText}
        />
        <Navigation
          className="ik-currency-page__navigation"
        />
        <AvaibleCurrencies
          className="ik-currency-page__avaible-currencies"
          cur={this.state.cur}
          currencyOnclick={this.currencyOnclick}
          filterText={this.state.filterText}
        />
        <CurrencyDateTable className="ik-currency-page__currency-table"
          dynamic={this.state.dynamic}
          abr={this.state.abr}
        />
        <ConverterContainer
          className="ik-currency-page__converter-container"
          currency={this.state.cur}
        />
      </div>
    )
  }
}
