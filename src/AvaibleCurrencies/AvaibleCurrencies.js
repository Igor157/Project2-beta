import React from "react";
import ReactDOM from "react-dom";
import styles from './.ik-avaible-currencies.css';
import { services } from '../Services/Services.js';

export class AvaibleCurrencies extends React.Component {
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
    // TODO: move calculations to separate method
    let currency = this.props.currency.map((item, index) => (
      <div key={index} className="ik-avaible-currencies__row">
        <div className="ik-avaible-currencies__abr">{item.Cur_Abbreviation}</div>
        <div className="ik-avaible-currencies__rate">{item.Cur_OfficialRate}</div>
        <button
          abr={item.Cur_Abbreviation}
          className={`ik-avaible-currencies__day-progress  ${services.curTendetionDetermination(item, index, yesterdayCurrency) > 0 ? rizeStyle : downStyle}`}
        >
          {
            (services.curTendetionDetermination(item, index, yesterdayCurrency) > 0) ? "+" + services.curTendetionDetermination(item, index, yesterdayCurrency) : services.curTendetionDetermination(item, index, yesterdayCurrency)
          }
        </button>
      </div>
    ));
    return (
      <div onClick={this.clickHandler} className={`ik-avaible-currencies  ${pageElementClass}`}>
        {currency}
      </div>
    );
  }
}
AvaibleCurrencies.defaultProps = { currency: [], yesterdayCurrency: [] };