import React from "react";
import ReactDOM from "react-dom";
import styles from './.ik-currency-page.css';
import {Search} from '../Search/Search.js';
import {Navigation} from '../Navigation/Navigation.js';
import {AvaibleCurrencies} from '../AvaibleCurrencies/AvaibleCurrencies.js';
import {CurrencyDateTable} from '../CurrencyDateTable/CurrencyDateTable.js';
import {CURRENCIES, YESTERDAYCURRENCIES, currencyCollection} from '../CurrencyData/CurrencyData.js'
import {ConverterButton} from '../ConverterButton/ConverterButton.js';
import {ConverterContainer} from '../ConverterContainer/ConverterContainer.js';

export class CurrencyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.currencyOnclick = this.currencyOnclick.bind(this);
  }
  currencyOnclick(target) {
    this.setState({abr: target});
    console.dir(target)
  }
  render() {
    return (
      <div className="ik-currency-page">
        <Search className="ik-currency-page__search" />
        <Navigation className="ik-currency-page__navigation" />
        <AvaibleCurrencies className="ik-currency-page__avaible-currencies" currency={this.props.currency} yesterdayCurrency={this.props.yesterdayCurrency} currencyOnclick={this.currencyOnclick} />

        <CurrencyDateTable className = "ik-currency-page__currency-table" currencyArr = {this.props.currencyArr} abr = {this.state.abr}/>
        <ConverterButton className = "ik-currency-page__converter-button" />
        <ConverterContainer className = "ik-currency-page__converter-container" currency={this.props.currency} />
      </div>
    )
  }
}

ReactDOM.render(
    <CurrencyPage
      currency={CURRENCIES}
      yesterdayCurrency={YESTERDAYCURRENCIES}
      currencyArr={currencyCollection} />,
    document.getElementById('ik-page')
  );