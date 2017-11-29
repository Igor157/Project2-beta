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
    let target = e.target;
    while (target !== this) {
      if (target.className === 'ik-avaible-currencies__row') {
        let end = new Date(Date.now());
        let start = new Date(end);
        start.setDate(start.getDate() - 20);
        this.props.getDynamic(target.getAttribute('id'), this.props.startDate, this.props.endDate);
        this.props.changeCurForDynamic(target.getAttribute('id'), target.getAttribute('abr'));
        return;
      }
      target = target.parentNode;
    }
  }
  componentDidMount() {
    this.props.getCur();
  }
  render() {
    const pageElementClass = this.props.className;
    let currencyArr = this.props.cur;
    let filterText = this.props.filterText;
    let currencyFilter = filterText ?
      currencyArr.filter((item) => item.curAbr.indexOf(filterText) !== -1)
      : currencyArr;
    let avaibleCurrency = currencyFilter.map((item, index) =>
      <div
        key={index}
        className="ik-avaible-currencies__row"
        id={item.curId}
        abr={item.curAbr}
      >
        <div className="ik-avaible-currencies__abr">{item.curAbr}</div>
        <div className="ik-avaible-currencies__rate">{item.curRate}</div>
        <button
          className={`ik-avaible-currencies__day-progress  ${item.curDifference > 0 ? rizeStyle : downStyle}`}
        >
          {
            item.curDifference > 0
              ? '+' + services.curTendetionDetermination(item.curDifference) : services.curTendetionDetermination(item.curDifference)
          }
        </button>
      </div>
    );
    return (
      <div onClick={this.clickHandler} className={`ik-avaible-currencies  ${pageElementClass}`}>
        {avaibleCurrency}
      </div>
    );
  }
}

