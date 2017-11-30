import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ik-available-currencies.style.css';
import { mathService } from '../../services/Services.js';
import { faService } from '../../services/Services.js';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';

const rizeStyle = "ik-available-currencies__day-progress--green";
const downStyle = "ik-available-currencies__day-progress--red";


export class AvailableCurrencies extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(e) {
    let target = e.target;
    while (target !== this) {
      if (target.className === 'ik-available-currencies__row') {
        let end = moment();
        let start = moment().date(-20);

        this.props.getDynamic(target.getAttribute('id'), start, end);
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
      currencyArr.filter((item) => item.curAbr.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
      : currencyArr;
    let choosenId = this.props.choosenId;
    let availableCurrency = currencyFilter.map((item, index) =>
      <div
        key={index}
        className={`ik-available-currencies__row${+item.curId === +choosenId ? ' ik-available-currencies__row--selected' : ''}`}
        smth={`ik-currency-tab${item.selected ? ' ik-currency-tab--selected' : ''}`}
        id={item.curId}
        abr={item.curAbr}
      >
        <FontAwesome
          className="ik-available-currencies__icon"
          name={faService.chooseIco(item.curAbr)}
          size='1x'
          style={{ color: 'white' }}
        />
        <div className="ik-available-currencies__abr">{item.curAbr}</div>
        <div className="ik-available-currencies__rate">{item.curRate}</div>
        <button
          className={`ik-available-currencies__day-progress  ${item.curDifference > 0 ? rizeStyle : downStyle}`}
        >
          {
            item.curDifference > 0
              ? '+' + mathService.curTendetionDetermination(item.curDifference) : mathService.curTendetionDetermination(item.curDifference)
          }
        </button>
      </div>
    );
    return (
      <div onClick={this.clickHandler} className={`ik-available-currencies  ${pageElementClass}`}>
        {availableCurrency}
      </div>
    );
  }
}

