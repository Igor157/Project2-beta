import React from "react";
import ReactDOM from "react-dom";
import styles from './ik-avaible-currencies.style.css';
import { services } from '../../services/Services.js';

const rizeStyle = "ik-avaible-currencies__day-progress--green";
const downStyle = "ik-avaible-currencies__day-progress--red";

export class AvaibleCurrencies extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(e) {
    // this.props.currencyOnclick(e.target);
  }
  componentDidMount() {
    this.props.getCur();
  }
  render() {
    const pageElementClass = this.props.className;
    let currencyArr = this.props.cur;
    let filterText = this.props.filterText;
    let currencyFilter = (filterText) ?
      currencyArr.filter((item) => item.curAbr.indexOf(filterText) !== -1)
      : currencyArr;
    let avaibleCurrency = currencyFilter.map((item, index) => (
      <div key={index} className="ik-avaible-currencies__row">
        <div className="ik-avaible-currencies__abr">{item.curAbr}</div>
        <div className="ik-avaible-currencies__rate">{item.curRate}</div>
        <button
          id={item.curId}
          abr={item.curAbr}
          className={`ik-avaible-currencies__day-progress  ${item.curDifference > 0 ? rizeStyle : downStyle}`}
        >
          {
            (item.curDifference > 0) ? "+" + services.curTendetionDetermination(item.curDifference) : services.curTendetionDetermination(item.curDifference)
          }
        </button>
      </div>
    ));
    return (
      <div onClick={this.clickHandler} className={`ik-avaible-currencies  ${pageElementClass}`}>
        {avaibleCurrency}
      </div>
    );
  }
}

