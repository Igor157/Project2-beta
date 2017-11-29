import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ik-currency-date-table.style.css';
import { EmptyTemplate } from '../empty-template/ik-empty-template.component.js';


export class CurrencyDateTable extends React.Component {
  render() {
    if (this.props.dynamic.length === 0) {
      return (
        <EmptyTemplate />
      );
    }
    const pageElementClass = this.props.className;
    let abr = this.props.abr;
    let currencyTable = this.props.dynamic.map(function (item, index) {
      return (
        <tr className="ik-currency-date-table__row" key={index}>
          <td className="ik-currency-date-table__item">{item.date}</td>
          <td className="ik-currency-date-table__item">{item.curRate}</td>
        </tr>
      );
    });
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
    );
  }
}
CurrencyDateTable.defaultProps = {dynamic: []};