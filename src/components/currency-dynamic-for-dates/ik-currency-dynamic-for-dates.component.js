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
    this.props.getDynamic(this.props.choosenId, date, moment(this.props.endDate));
  }
  handleChangeEnd(date) {
    this.props.changeEndDate(date);
    this.props.getDynamic(this.props.choosenId, moment(this.props.startDate), date);
  }
  componentDidMount() {
    this.props.getDynamic(this.props.choosenId, moment().date(-20), moment());
    this.props.changeEndDate(moment());
    this.props.changeStartDate(moment().add(-30, 'days'));
  }
  componentDidUpdate(prevProps) {
    if (prevProps.choosenId !== this.props.choosenId) {
      this.props.getDynamic(this.props.choosenId, moment().date(-20), moment());
    }
  }
  render() {
    const pageElementClass = this.props.className;
    let dynamic = this.props.dynamic;
    return (
      <div className={`ik-currency-dynamic-for-dates ${pageElementClass}`}>
        <div className="ik-currency-dynamic-for-dates__date-input">
          <div className="ik-currency-dynamic-for-dates__date-picker">
            <div>From date</div>
            < DatePicker
              selected={moment(this.props.startDate)}
              selectsStart
              startDate={moment(this.props.startDate)}
              endDate={moment(this.props.endDate)}
              onSelect={this.handleChangeStart}
              minDate={moment().add(-365, "days")}
              maxDate={moment(this.props.endDate)}
            />
          </div>
          <div className="ik-currency-dynamic-for-dates__date-picker">
            <div>End date</div>
            <DatePicker
              selected={moment(this.props.endDate)}
              selectsEnd
              startDate={moment(this.props.startDate)}
              endDate={moment(this.props.endDate)}
              onSelect={this.handleChangeEnd}
              minDate={moment(this.props.startDate)}
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