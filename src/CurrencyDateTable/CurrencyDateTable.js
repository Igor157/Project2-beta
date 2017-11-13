import React from "react";
import ReactDOM from "react-dom";
import styles from './.ik-currency-date-table.css';
import { EmptyTemplate } from '../EmptyTemplate/EmptyTemplate.js';

export class CurrencyDateTable extends React.Component {
  render() {
    if (this.props.abr == undefined) {
      return (
        <EmptyTemplate />
      )
    }
    const pageElementClass = this.props.className;
    const abr = this.props.abr;
    let choicedArr = this.props.currencyArr.filter((item) => item.Cur_Abbreviation == this.props.abr);
    let currencyTable = choicedArr.map(function (item, index) {
      return (
        <tr className="ik-currency-date-table__row" key={index}>
          <td className="ik-currency-date-table__item">{item.Date}</td>
          <td className="ik-currency-date-table__item">{item.Cur_OfficialRate}</td>
        </tr>
      )
    });
    // TODO: better to use div instead of table
    return (
      <table className={`ik-currency-date-table ${pageElementClass}`}>
        <tbody>
          <tr className="ik-currency-date-table__row">
            <th>Date</th>
            <th>{abr}</th>
          </tr>
          {currencyTable}
        </tbody>
      </table>
    )
  }
}
CurrencyDateTable.defaultProps = {currencyArr:[], yesterdayCurrency:[]};