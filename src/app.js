
import React from "react";
import ReactDOM from "react-dom";
import styles from './styles/style.css';
import image from './styles/images/rich.jpg';

class AvaibleCurrencies extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(e) {
    this.props.currencyOnclick(e.target.getAttribute("abr"));
  }

  render() {
    const yesterdayCurrency = this.props.yesterdayCurrency;
    const pageElementClass = this.props.className;
    const rizeStyle = "ik-avaible-currencies__day-progress--green";
    const downStyle = "ik-avaible-currencies__day-progress--red";
    let currency = this.props.currency.map(function (item, index) {
      return (
        <div key={index} className="ik-avaible-currencies__row">
          <div className="ik-avaible-currencies__abr">{item.Cur_Abbreviation}</div>
          <div className="ik-avaible-currencies__rate">{item.Cur_OfficialRate}</div>
          <button abr={item.Cur_Abbreviation} className={`ik-avaible-currencies__day-progress  ${Math.round(((item.Cur_OfficialRate - yesterdayCurrency[index].Cur_OfficialRate) * 10000) / 10000 > 0) ? rizeStyle : downStyle}`}>
            {Math.round((item.Cur_OfficialRate - yesterdayCurrency[index].Cur_OfficialRate) * 10000) / 10000 > 0 ? "+" + Math.round((item.Cur_OfficialRate - yesterdayCurrency[index].Cur_OfficialRate) * 10000) / 10000 : Math.round((item.Cur_OfficialRate - yesterdayCurrency[index].Cur_OfficialRate) * 10000) / 10000}</button>
        </div>
      )
    });
    return (
      <div onClick={this.clickHandler} className={`ik-avaible-currencies  ${pageElementClass}`}>
        {currency}
      </div>
    );
  }
}
class CurrencyDateTable extends React.Component {
  render() {
    if (this.props.abr == undefined)
    return (
      <Tableplace />
    )
    
    const pageElementClass = this.props.className;
    const abr = this.props.abr;
    let choicedArr = this.props.currencyArr.filter((item) => item.Cur_Abbreviation == this.props.abr);
    let currencyTable = choicedArr.map(function (item, index) {
      return (
        <tr className = "ik-currency-date-table__row" key={index}>
          <td className = "ik-currency-date-table__item">{item.Date}</td>
          <td className = "ik-currency-date-table__item">{item.Cur_OfficialRate}</td>
        </tr>
      )
    });
    return (
      <table className={`ik-currency-date-table ${pageElementClass}`}>
        <tr className = "ik-currency-date-table__row">
          <th>Date</th>
          <th>{abr}</th>
        </tr>
        {currencyTable}
      </table>
    )
  }
}


class Search extends React.Component {
  render() {
    const pageElementClass = this.props.className;
    return (
      <form className={`ik-search ${pageElementClass}`}>
        <input className="ik-search__search-place" type="text" placeholder="Search input" />
        <input className="ik-search__search-button" type="button" value="Search" />
      </form>
    );
  }
}


class Navigation extends React.Component {
  render() {
    const pageElementClass = this.props.className;
    return (
      <div className={`ik-nav ${pageElementClass}`}>
        <a className="ik-nav__button" href="">About</a>
        <a className="ik-nav__button" href="">Home</a>
        <a className="ik-nav__button" href="">Pricing</a>
        <a className="ik-nav__button" href="">Blog</a>
      </div>
    );
  }
}
class Tableplace extends React.Component {
  render() {
    const pageElementClass = this.props.className
    return (
      <div className={`ik-output ${pageElementClass}`} >
        Select any currency
      </div>
    );
  }
}
 

class CurrencyPage extends React.Component {
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
      </div>
    )
  }
}

const CURRENCIES = [{ "Cur_ID": 170, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "AUD", "Cur_Scale": 1, "Cur_Name": "Австралийский доллар", "Cur_OfficialRate": 1.5191 }, { "Cur_ID": 191, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "BGN", "Cur_Scale": 1, "Cur_Name": "Болгарский лев", "Cur_OfficialRate": 1.1783 }, { "Cur_ID": 290, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "UAH", "Cur_Scale": 100, "Cur_Name": "Гривен", "Cur_OfficialRate": 7.3660 }, { "Cur_ID": 291, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "DKK", "Cur_Scale": 10, "Cur_Name": "Датских крон", "Cur_OfficialRate": 3.0964 }, { "Cur_ID": 145, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "USD", "Cur_Scale": 1, "Cur_Name": "Доллар США", "Cur_OfficialRate": 1.9855 }, { "Cur_ID": 292, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "EUR", "Cur_Scale": 1, "Cur_Name": "Евро", "Cur_OfficialRate": 2.3058 }, { "Cur_ID": 293, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "PLN", "Cur_Scale": 10, "Cur_Name": "Злотых", "Cur_OfficialRate": 5.4300 }, { "Cur_ID": 303, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "IRR", "Cur_Scale": 100000, "Cur_Name": "Иранских риалов", "Cur_OfficialRate": 5.6810 }, { "Cur_ID": 294, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "ISK", "Cur_Scale": 100, "Cur_Name": "Исландских крон", "Cur_OfficialRate": 1.8677 }, { "Cur_ID": 295, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "JPY", "Cur_Scale": 100, "Cur_Name": "Йен", "Cur_OfficialRate": 1.7405 }, { "Cur_ID": 23, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "CAD", "Cur_Scale": 1, "Cur_Name": "Канадский доллар", "Cur_OfficialRate": 1.5560 }, { "Cur_ID": 304, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "CNY", "Cur_Scale": 10, "Cur_Name": "Китайских юаней", "Cur_OfficialRate": 2.9907 }, { "Cur_ID": 72, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "KWD", "Cur_Scale": 1, "Cur_Name": "Кувейтский динар", "Cur_OfficialRate": 6.5593 }, { "Cur_ID": 296, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "MDL", "Cur_Scale": 10, "Cur_Name": "Молдавских леев", "Cur_OfficialRate": 1.1414 }, { "Cur_ID": 286, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "NZD", "Cur_Scale": 1, "Cur_Name": "Новозеландский доллар", "Cur_OfficialRate": 1.3714 }, { "Cur_ID": 297, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "NOK", "Cur_Scale": 10, "Cur_Name": "Норвежских крон", "Cur_OfficialRate": 2.4296 }, { "Cur_ID": 298, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "RUB", "Cur_Scale": 100, "Cur_Name": "Российских рублей", "Cur_OfficialRate": 3.3658 }, { "Cur_ID": 299, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "XDR", "Cur_Scale": 1, "Cur_Name": "СДР (Специальные права заимствования)", "Cur_OfficialRate": 2.7864 }, { "Cur_ID": 119, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "SGD", "Cur_Scale": 1, "Cur_Name": "Сингапурcкий доллар", "Cur_OfficialRate": 1.4546 }, { "Cur_ID": 300, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "KGS", "Cur_Scale": 100, "Cur_Name": "Сомов", "Cur_OfficialRate": 2.8893 }, { "Cur_ID": 301, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "KZT", "Cur_Scale": 1000, "Cur_Name": "Тенге", "Cur_OfficialRate": 5.9392 }, { "Cur_ID": 302, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "TRY", "Cur_Scale": 10, "Cur_Name": "Турецких лир", "Cur_OfficialRate": 5.1088 }, { "Cur_ID": 143, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "GBP", "Cur_Scale": 1, "Cur_Name": "Фунт стерлингов", "Cur_OfficialRate": 2.5963 }, { "Cur_ID": 305, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "CZK", "Cur_Scale": 100, "Cur_Name": "Чешских крон", "Cur_OfficialRate": 8.9742 }, { "Cur_ID": 306, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "SEK", "Cur_Scale": 10, "Cur_Name": "Шведских крон", "Cur_OfficialRate": 2.3544 }, { "Cur_ID": 130, "Date": "2017-11-05T00:00:00", "Cur_Abbreviation": "CHF", "Cur_Scale": 1, "Cur_Name": "Швейцарский франк", "Cur_OfficialRate": 1.9841 }];

const YESTERDAYCURRENCIES = [{ "Cur_ID": 170, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "AUD", "Cur_Scale": 1, "Cur_Name": "Австралийский доллар", "Cur_OfficialRate": 1.5199 }, { "Cur_ID": 191, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "BGN", "Cur_Scale": 1, "Cur_Name": "Болгарский лев", "Cur_OfficialRate": 1.1796 }, { "Cur_ID": 290, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "UAH", "Cur_Scale": 100, "Cur_Name": "Гривен", "Cur_OfficialRate": 7.3451 }, { "Cur_ID": 291, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "DKK", "Cur_Scale": 10, "Cur_Name": "Датских крон", "Cur_OfficialRate": 3.1003 }, { "Cur_ID": 145, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "USD", "Cur_Scale": 1, "Cur_Name": "Доллар США", "Cur_OfficialRate": 1.9806 }, { "Cur_ID": 292, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "EUR", "Cur_Scale": 1, "Cur_Name": "Евро", "Cur_OfficialRate": 2.3068 }, { "Cur_ID": 293, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "PLN", "Cur_Scale": 10, "Cur_Name": "Злотых", "Cur_OfficialRate": 5.4401 }, { "Cur_ID": 303, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "IRR", "Cur_Scale": 100000, "Cur_Name": "Иранских риалов", "Cur_OfficialRate": 5.6670 }, { "Cur_ID": 294, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "ISK", "Cur_Scale": 100, "Cur_Name": "Исландских крон", "Cur_OfficialRate": 1.8651 }, { "Cur_ID": 295, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "JPY", "Cur_Scale": 100, "Cur_Name": "Йен", "Cur_OfficialRate": 1.7361 }, { "Cur_ID": 23, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "CAD", "Cur_Scale": 1, "Cur_Name": "Канадский доллар", "Cur_OfficialRate": 1.5440 }, { "Cur_ID": 304, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "CNY", "Cur_Scale": 10, "Cur_Name": "Китайских юаней", "Cur_OfficialRate": 2.9881 }, { "Cur_ID": 72, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "KWD", "Cur_Scale": 1, "Cur_Name": "Кувейтский динар", "Cur_OfficialRate": 6.5399 }, { "Cur_ID": 296, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "MDL", "Cur_Scale": 10, "Cur_Name": "Молдавских леев", "Cur_OfficialRate": 1.1350 }, { "Cur_ID": 286, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "NZD", "Cur_Scale": 1, "Cur_Name": "Новозеландский доллар", "Cur_OfficialRate": 1.3716 }, { "Cur_ID": 297, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "NOK", "Cur_Scale": 10, "Cur_Name": "Норвежских крон", "Cur_OfficialRate": 2.4327 }, { "Cur_ID": 298, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "RUB", "Cur_Scale": 100, "Cur_Name": "Российских рублей", "Cur_OfficialRate": 3.3909 }, { "Cur_ID": 299, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "XDR", "Cur_Scale": 1, "Cur_Name": "СДР (Специальные права заимствования)", "Cur_OfficialRate": 2.7812 }, { "Cur_ID": 119, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "SGD", "Cur_Scale": 1, "Cur_Name": "Сингапурcкий доллар", "Cur_OfficialRate": 1.4549 }, { "Cur_ID": 300, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "KGS", "Cur_Scale": 100, "Cur_Name": "Сомов", "Cur_OfficialRate": 2.8821 }, { "Cur_ID": 301, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "KZT", "Cur_Scale": 1000, "Cur_Name": "Тенге", "Cur_OfficialRate": 5.9245 }, { "Cur_ID": 302, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "TRY", "Cur_Scale": 10, "Cur_Name": "Турецких лир", "Cur_OfficialRate": 5.1802 }, { "Cur_ID": 143, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "GBP", "Cur_Scale": 1, "Cur_Name": "Фунт стерлингов", "Cur_OfficialRate": 2.5878 }, { "Cur_ID": 305, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "CZK", "Cur_Scale": 100, "Cur_Name": "Чешских крон", "Cur_OfficialRate": 8.9848 }, { "Cur_ID": 306, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "SEK", "Cur_Scale": 10, "Cur_Name": "Шведских крон", "Cur_OfficialRate": 2.3574 }, { "Cur_ID": 130, "Date": "2017-11-04T00:00:00", "Cur_Abbreviation": "CHF", "Cur_Scale": 1, "Cur_Name": "Швейцарский франк", "Cur_OfficialRate": 1.9820 }];

const YESTERDAYCURRENCIES_1 = [{ "Cur_ID": 170, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "AUD", "Cur_Scale": 1, "Cur_Name": "Австралийский доллар", "Cur_OfficialRate": 1.5232 }, { "Cur_ID": 191, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "BGN", "Cur_Scale": 1, "Cur_Name": "Болгарский лев", "Cur_OfficialRate": 1.1773 }, { "Cur_ID": 290, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "UAH", "Cur_Scale": 100, "Cur_Name": "Гривен", "Cur_OfficialRate": 7.3414 }, { "Cur_ID": 291, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "DKK", "Cur_Scale": 10, "Cur_Name": "Датских крон", "Cur_OfficialRate": 3.0939 }, { "Cur_ID": 145, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "USD", "Cur_Scale": 1, "Cur_Name": "Доллар США", "Cur_OfficialRate": 1.9774 }, { "Cur_ID": 292, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "EUR", "Cur_Scale": 1, "Cur_Name": "Евро", "Cur_OfficialRate": 2.3027 }, { "Cur_ID": 293, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "PLN", "Cur_Scale": 10, "Cur_Name": "Злотых", "Cur_OfficialRate": 5.4366 }, { "Cur_ID": 303, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "IRR", "Cur_Scale": 100000, "Cur_Name": "Иранских риалов", "Cur_OfficialRate": 5.6578 }, { "Cur_ID": 294, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "ISK", "Cur_Scale": 100, "Cur_Name": "Исландских крон", "Cur_OfficialRate": 1.8630 }, { "Cur_ID": 295, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "JPY", "Cur_Scale": 100, "Cur_Name": "Йен", "Cur_OfficialRate": 1.7331 }, { "Cur_ID": 23, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "CAD", "Cur_Scale": 1, "Cur_Name": "Канадский доллар", "Cur_OfficialRate": 1.5400 }, { "Cur_ID": 304, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "CNY", "Cur_Scale": 10, "Cur_Name": "Китайских юаней", "Cur_OfficialRate": 2.9913 }, { "Cur_ID": 72, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "KWD", "Cur_Scale": 1, "Cur_Name": "Кувейтский динар", "Cur_OfficialRate": 6.5347 }, { "Cur_ID": 296, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "MDL", "Cur_Scale": 10, "Cur_Name": "Молдавских леев", "Cur_OfficialRate": 1.1332 }, { "Cur_ID": 286, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "NZD", "Cur_Scale": 1, "Cur_Name": "Новозеландский доллар", "Cur_OfficialRate": 1.3673 }, { "Cur_ID": 297, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "NOK", "Cur_Scale": 10, "Cur_Name": "Норвежских крон", "Cur_OfficialRate": 2.4270 }, { "Cur_ID": 298, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "RUB", "Cur_Scale": 100, "Cur_Name": "Российских рублей", "Cur_OfficialRate": 3.4032 }, { "Cur_ID": 299, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "XDR", "Cur_Scale": 1, "Cur_Name": "СДР (Специальные права заимствования)", "Cur_OfficialRate": 2.7784 }, { "Cur_ID": 119, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "SGD", "Cur_Scale": 1, "Cur_Name": "Сингапурcкий доллар", "Cur_OfficialRate": 1.4538 }, { "Cur_ID": 300, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "KGS", "Cur_Scale": 100, "Cur_Name": "Сомов", "Cur_OfficialRate": 2.8775 }, { "Cur_ID": 301, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "KZT", "Cur_Scale": 1000, "Cur_Name": "Тенге", "Cur_OfficialRate": 5.9035 }, { "Cur_ID": 302, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "TRY", "Cur_Scale": 10, "Cur_Name": "Турецких лир", "Cur_OfficialRate": 5.1974 }, { "Cur_ID": 143, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "GBP", "Cur_Scale": 1, "Cur_Name": "Фунт стерлингов", "Cur_OfficialRate": 2.6174 }, { "Cur_ID": 305, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "CZK", "Cur_Scale": 100, "Cur_Name": "Чешских крон", "Cur_OfficialRate": 9.0078 }, { "Cur_ID": 306, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "SEK", "Cur_Scale": 10, "Cur_Name": "Шведских крон", "Cur_OfficialRate": 2.3574 }, { "Cur_ID": 130, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "CHF", "Cur_Scale": 1, "Cur_Name": "Швейцарский франк", "Cur_OfficialRate": 1.9776 }];

const YESTERDAYCURRENCIES_2 = [{ "Cur_ID": 170, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "AUD", "Cur_Scale": 1, "Cur_Name": "Австралийский доллар", "Cur_OfficialRate": 1.5232 }, { "Cur_ID": 191, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "BGN", "Cur_Scale": 1, "Cur_Name": "Болгарский лев", "Cur_OfficialRate": 1.1773 }, { "Cur_ID": 290, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "UAH", "Cur_Scale": 100, "Cur_Name": "Гривен", "Cur_OfficialRate": 7.3414 }, { "Cur_ID": 291, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "DKK", "Cur_Scale": 10, "Cur_Name": "Датских крон", "Cur_OfficialRate": 3.0939 }, { "Cur_ID": 145, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "USD", "Cur_Scale": 1, "Cur_Name": "Доллар США", "Cur_OfficialRate": 1.9774 }, { "Cur_ID": 292, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "EUR", "Cur_Scale": 1, "Cur_Name": "Евро", "Cur_OfficialRate": 2.3027 }, { "Cur_ID": 293, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "PLN", "Cur_Scale": 10, "Cur_Name": "Злотых", "Cur_OfficialRate": 5.4366 }, { "Cur_ID": 303, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "IRR", "Cur_Scale": 100000, "Cur_Name": "Иранских риалов", "Cur_OfficialRate": 5.6578 }, { "Cur_ID": 294, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "ISK", "Cur_Scale": 100, "Cur_Name": "Исландских крон", "Cur_OfficialRate": 1.8630 }, { "Cur_ID": 295, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "JPY", "Cur_Scale": 100, "Cur_Name": "Йен", "Cur_OfficialRate": 1.7331 }, { "Cur_ID": 23, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "CAD", "Cur_Scale": 1, "Cur_Name": "Канадский доллар", "Cur_OfficialRate": 1.5400 }, { "Cur_ID": 304, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "CNY", "Cur_Scale": 10, "Cur_Name": "Китайских юаней", "Cur_OfficialRate": 2.9913 }, { "Cur_ID": 72, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "KWD", "Cur_Scale": 1, "Cur_Name": "Кувейтский динар", "Cur_OfficialRate": 6.5347 }, { "Cur_ID": 296, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "MDL", "Cur_Scale": 10, "Cur_Name": "Молдавских леев", "Cur_OfficialRate": 1.1332 }, { "Cur_ID": 286, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "NZD", "Cur_Scale": 1, "Cur_Name": "Новозеландский доллар", "Cur_OfficialRate": 1.3673 }, { "Cur_ID": 297, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "NOK", "Cur_Scale": 10, "Cur_Name": "Норвежских крон", "Cur_OfficialRate": 2.4270 }, { "Cur_ID": 298, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "RUB", "Cur_Scale": 100, "Cur_Name": "Российских рублей", "Cur_OfficialRate": 3.4032 }, { "Cur_ID": 299, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "XDR", "Cur_Scale": 1, "Cur_Name": "СДР (Специальные права заимствования)", "Cur_OfficialRate": 2.7784 }, { "Cur_ID": 119, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "SGD", "Cur_Scale": 1, "Cur_Name": "Сингапурcкий доллар", "Cur_OfficialRate": 1.4538 }, { "Cur_ID": 300, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "KGS", "Cur_Scale": 100, "Cur_Name": "Сомов", "Cur_OfficialRate": 2.8775 }, { "Cur_ID": 301, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "KZT", "Cur_Scale": 1000, "Cur_Name": "Тенге", "Cur_OfficialRate": 5.9035 }, { "Cur_ID": 302, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "TRY", "Cur_Scale": 10, "Cur_Name": "Турецких лир", "Cur_OfficialRate": 5.1974 }, { "Cur_ID": 143, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "GBP", "Cur_Scale": 1, "Cur_Name": "Фунт стерлингов", "Cur_OfficialRate": 2.6174 }, { "Cur_ID": 305, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "CZK", "Cur_Scale": 100, "Cur_Name": "Чешских крон", "Cur_OfficialRate": 9.0078 }, { "Cur_ID": 306, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "SEK", "Cur_Scale": 10, "Cur_Name": "Шведских крон", "Cur_OfficialRate": 2.3574 }, { "Cur_ID": 130, "Date": "2017-11-03T00:00:00", "Cur_Abbreviation": "CHF", "Cur_Scale": 1, "Cur_Name": "Швейцарский франк", "Cur_OfficialRate": 1.9776 }];

let currencyCollection = CURRENCIES.concat(YESTERDAYCURRENCIES, YESTERDAYCURRENCIES_1, YESTERDAYCURRENCIES_2)


ReactDOM.render(
  <CurrencyPage
    currency={CURRENCIES}
    yesterdayCurrency={YESTERDAYCURRENCIES}
    currencyArr={currencyCollection} />,
  document.getElementById('ik-page')
);
