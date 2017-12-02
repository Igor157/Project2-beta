import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import styles from './ik-currency-calculator.style.css';

import { OneSideConverterContainer } from '../one-side-converter-container';
import { EmptyTemplate } from '../empty-template';
import { CurrencyGraph } from '../currency-graph';



export class CurrencyCalculator extends React.Component {
  componentDidMount() {
    if (this.props.choosenId) {
      this.props.getDynamic(this.props.choosenId, moment().date(-20), moment());
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.currentAbr !== this.props.currentAbr) {
      this.props.getDynamic(this.props.choosenId, moment().date(-20), moment());
    }
  }

  render() {
    if (this.props.currentAbr === undefined) {
      return (
        <EmptyTemplate />
      );
    }
    const pageElementClass = this.props.className;
    const currentAbr = this.props.currentAbr;
    return (
      <div className={`ik-currency-calculator ${pageElementClass}`}>
        <OneSideConverterContainer
          className="ik-currency-calculator__converter"
          currency={this.props.currency}
          currentAbr={currentAbr ? currentAbr : 'AUD'}
        />
        <CurrencyGraph
          className="ik-currency-calculator__currency-graph"
          dynamic={this.props.dynamic}
        />
      </div>
    );
  }
}

