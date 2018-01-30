import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ik-currency-dynamic-for-dates.style.css';
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
  componentDidMount() {
    this.props.getDynamic(this.props.choosenId, moment().date(-20), moment());
  }
  componentDidUpdate(prevProps) {
    if (prevProps.choosenId !== this.props.choosenId) {
      this.props.getDynamic(this.props.choosenId, moment().date(-20), moment());
    }
  }
  render() {
    const pageElementClass = this.props.className;
    let dynamic = this.props.dynamic;
    console.log(this.props.endDate,'this.props.endDate');
    return (
      <div className={`ik-currency-dynamic-for-dates ${pageElementClass}`}>
        <div className="ik-currency-dynamic-for-dates__date-input">
          <div className="ik-currency-dynamic-for-dates__date-picker">
            <div>From date</div>
            < DatePicker
              selected={this.props.startDate}
              selectsStart
              startDate={this.props.startDate}
              endDate={this.props.endDate}
              onSelect={this.handleChangeStart}
              minDate={moment().add(-365, "days")}
              maxDate={this.props.endDate}
            />
          </div>
          <div className="ik-currency-dynamic-for-dates__date-picker">
            <div>End date</div>
            <DatePicker
              selected={this.props.endDate}
              selectsEnd
              startDate={this.props.startDate}
              endDate={this.props.endDate}
              onSelect={this.handleChangeEnd}
              minDate={this.props.startDate}
              maxDate={moment()}
            />
          </div>
        </div>
        <CurrencyGraph
          className="ik-currency-dynamic-for-dates__graph"
          dynamic={this.props.dynamic}
        />
      </div>
    );
  }
}