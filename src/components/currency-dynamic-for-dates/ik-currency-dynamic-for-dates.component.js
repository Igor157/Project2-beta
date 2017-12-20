import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ik-currency-dynamic-for-dates.style.css';
import { CurrencyGraph } from '../currency-graph';

import DatePicker from 'react-datepicker';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
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
    // let chartingData = this.props.dynamic.map((item) => {
    //   return { name: item.date, value: item.curRate };
    // });
    // console.log(chartingData, 'chartingData');
    let dynamic = this.props.dynamic;
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
        <ResponsiveContainer height="70%">
          <AreaChart data={dynamic}>
            <XAxis dataKey="date" />
            <YAxis domain={['dataMin', 'dataMax']} />
            <Area type="monotone" dataKey="curRate" stroke="#8884d8" fillOpacity={1} fill="#8884d8" />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
        {/* <CurrencyGraph
          className="ik-currency-dynamic-for-dates__graph"
          dynamic={this.props.dynamic}
        /> */}
      </div>
    );
  }
}