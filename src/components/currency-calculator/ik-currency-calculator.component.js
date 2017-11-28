import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ik-currency-calculator.style.css';

import { OneSideConverterContainer } from '../one-side-converter-container';
import { EmptyTemplate } from '../empty-template';



export class CurrencyCalculator extends React.Component {

  render() {
    if (this.props.dynamic === undefined) {
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
      </div>
    );
  }
}

