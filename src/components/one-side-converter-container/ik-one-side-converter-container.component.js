import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ik-one-side-converter-container.style.css';
import { OneSideConverterInput } from '../one-side-converter-input/ik-one-side-converter-input.component.js';
import { converterServices } from '../../services/Services.js';
import { ConverterButton } from '../converter-button/ik-converter-button.component.js';


export class OneSideConverterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
    this.onAbrChange = this.onAbrChange.bind(this);
    this.state = { inputValue: '', choosenAbr: '' };
  }

  onValueChange(target) {
    this.setState({ inputValue: target });
  }
  onAbrChange(target) {
    this.setState({ choosenAbr: target });
  }

  render() {
    const pageElementClass = this.props.className;
    const value = this.state.inputValue;
    const valueAbr = this.props.currentAbr;
    const destinationAbr = this.state.choosenAbr;
    const allCurrencies = this.props.currency;
    const currentValueRate = converterServices.filterCurForTarget(allCurrencies, valueAbr).curRate;
    const currentDestRate = destinationAbr ?
      converterServices.filterCurForTarget(allCurrencies, destinationAbr).curRate :
      allCurrencies[0].curRate;
    const destinationField = converterServices.tryConvert(value, currentValueRate, currentDestRate, converterServices.moneyConvert);
    const valueField = value;
    return (
      <div className={`ik-converter-container ${pageElementClass}`}>
        <OneSideConverterInput
          className="ik-converter-container__converter-input"
          currency={this.props.currency}
          operation="Value"
          onValueChange={this.onValueChange}
          currentValue={valueField}
          choosenAbr={valueAbr}
        />
        <OneSideConverterInput
          className="ik-converter-container__converter-input"
          currency={this.props.currency}
          operation="Destination"
          onAbrChange={this.onAbrChange}
          currentValue={destinationField}
        />
      </div>
    );
  }
}

