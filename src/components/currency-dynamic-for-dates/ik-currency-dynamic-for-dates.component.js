import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ik-currency-dynamic-for-dates.style.css';
import { CurrencyDateTable } from '../currency-date-table';
import { CurrencyGraph } from '../currency-graph';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export class CurrencyDynamicForDates extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChangeStart(date) {
    this.props.changeStartDate(date);
    this.props.getDynamic(this.props.choosenId, date, this.props.endDate);
  }
  handleChangeEnd(date) {
    this.props.changeEndDate(date);
    this.props.getDynamic(this.props.choosenId, this.props.startDate, date);
  }
  componentDidMount(prevProps) {
      this.props.getDynamic(this.props.choosenId, moment().date(-20), moment());
  }
  render() {
    const pageElementClass = this.props.className;
    return (
      <div className={`ik-currency-dynamic-for-dates ${pageElementClass}`}>
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