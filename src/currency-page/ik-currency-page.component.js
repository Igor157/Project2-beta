import React from "react";
import ReactDOM from "react-dom";
import styles from './ik-currency-page.style.css';

import { Navigation } from '../navigation/ik-navigation.component.js';
import { Search } from '../search/ik-search.component.js'
import { AvaibleCurrencies } from '../avaible-currencies/ik-avaible-currencies.component.js';
import { CurrencyDateTable } from '../currency-date-table/ik-currency-date-table.component.js';
import { ConverterButton } from '../converter-button/ik-converter-button.component.js';
import { ConverterContainer } from '../converter-container/ik-converter-container.component.js';
import { services } from '../Services/Services.js';

export class CurrencyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.currencyOnclick = this.currencyOnclick.bind(this);
    this.onFilterTextChange = this.onFilterTextChange.bind(this);
  }
  currencyOnclick(target) {
    this.setState({ abr: target });
  }
  onFilterTextChange(target) {
    this.setState({ filterText: target });
  }
  componentWillMount() {
    let promisesArr = [];
    for (let i = 0; i <= 9; ++i) {
      promisesArr.push(services.reqCur(services.getUrl()[i]))
    };
    Promise.all(promisesArr)
      .then(Data => {
        console.dir(Data, "data");
        let currencyCollection = Data[0].concat(Data[1], Data[2], Data[3], Data[4], Data[5], Data[6], Data[7], Data[8], Data[9]);
        this.setState({
          currency: Data[0],
          yesterdayCurrency: Data[1],
          currencyArr: currencyCollection
        })
      })
      .catch(err => { console.log(err) });
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
          currency={this.state.currency}
          yesterdayCurrency={this.state.yesterdayCurrency}
          currencyOnclick={this.currencyOnclick}
          filterText={this.state.filterText}
        />
        <CurrencyDateTable className="ik-currency-page__currency-table"
          currencyArr={this.state.currencyArr}
          abr={this.state.abr}
        />
        <ConverterContainer
          className="ik-currency-page__converter-container"
          currency={this.state.currency}
        />
      </div>
    )
  }
}

// TODO: separate to enother file
ReactDOM.render(
  <CurrencyPage />,
  document.getElementById('ik-page')
);