import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ik-currency-dynamic-for-dates.style.css';
import { EmptyTemplate } from '../empty-template/ik-empty-template.component.js';
import { CurrencyDateTable } from '../currency-date-table';
import {CurrencyGraph} from '../currency-graph';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export class CurrencyDynamicForDates extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   startDate: moment(),
    //   endDate: moment().date(-20)
    // };
    // this.props.getDynamic(this.props.choosenId, this.state.startDate, this.state.endDate);
    this.props.changeStartDate(moment().date(-20));
    this.props.changeEndDate(moment());
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.clickToFavorite = this.clickToFavorite.bind(this);
  }

  handleChangeStart(date) {
    this.props.changeStartDate(date);
    this.props.getDynamic(this.props.choosenId, date, this.props.endDate);
  }
  handleChangeEnd(date) {
    this.props.changeEndDate(date);
    this.props.getDynamic(this.props.choosenId, this.props.startDate, date);
  }
  clickToFavorite() {
    let favoriteFirst = this.props.favoriteCurData.length === 0 ? true : false;
    this.props.addCurToFavorite(this.props.choosenAbr, this.props.choosenId, this.props.dynamic, favoriteFirst);
  }

  render() {
    const pageElementClass = this.props.className;
    if (this.props.choosenId === undefined) {
      return (
        <EmptyTemplate />
      );
    }
    return (
      <div className={`ik-currency-dynamic-for-dates ${pageElementClass}`}>
        <button
          onClick={this.clickToFavorite} className="ik-currency-dynamic-for-dates__savebutton"
        >To Favorite
             </button>
        <div className="ik-currency-dynamic-for-dates__date-input">
          <div className="ik-currency-dynamic-for-dates__date-picker">
            <div>From date</div>
            <DatePicker
              selected={this.props.startDate}
              onSelect={this.handleChangeStart}
            />
          </div>
          <div className="ik-currency-dynamic-for-dates__date-picker">
            <div>End date</div>
            <DatePicker
              selected={this.props.endDate}
              onSelect={this.handleChangeEnd}
            />
          </div>
        </div>
        <CurrencyGraph
          className="ik-currency-dynamic-for-dates__graph"
          dynamic={this.props.dynamic}
        />
      </div >
    );
  }
}