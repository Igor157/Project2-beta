import React from "react";
import ReactDOM from "react-dom";
import styles from './.ik-converter-container.css';
import { ConverterInput } from '../ConverterInput/ConverterInput.js';
import { moneyConvert } from '../Services/Servicer.js';
import { tryConvert } from '../Services/Servicer.js';



export class ConverterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.onValue1Change = this.onValue1Change.bind(this);
    this.onValue2Change = this.onValue2Change.bind(this);
    this.onAbr1Change = this.onAbr1Change.bind(this);
    this.onAbr2Change = this.onAbr2Change.bind(this);
  }
  onValue1Change(target) {
    this.setState({ inputValue: target });
    this.setState({ currentAbr: this.state.input1Abr });
  }
  onValue2Change(target) {
    this.setState({ inputValue: target });
    this.setState({ currentAbr: this.state.input2Abr });

  }
  onAbr1Change(target) {
    this.setState({ input1Abr: target });
    this.setState({ current1Rate: this.props.currency.filter((item) => item.Cur_Abbreviation == target)[0].Cur_OfficialRate });
  }
  onAbr2Change(target) {
    this.setState({ input2Abr: target });
    this.setState({ current2Rate: this.props.currency.filter((item) => item.Cur_Abbreviation == target)[0].Cur_OfficialRate });
  }

  render() {
    const pageElementClass = this.props.className;
    const currentAbr = this.state.currentAbr;
    const value = this.state.inputValue;
    const abr1 = this.state.input1Abr;
    const abr2 = this.state.input2Abr;
    const allCurrencies = this.props.currency;
    const selectedCur = allCurrencies.filter((item) => item.Cur_Abbreviation == abr1);
    const cur1 = this.state.current1Rate;
    const cur2 = this.state.current2Rate;

    const field1 = (currentAbr === abr1) ? tryConvert(value, cur1, cur2, moneyConvert) : value;
    const field2 = (currentAbr === abr2) ? tryConvert(value, cur2, cur1, moneyConvert) : value;
    return (
      <div className={`ik-converter-container ${pageElementClass}`}>
        <div className="ik-converter-container__tittle"> Currency converter</div>
        <hr></hr>
        <ConverterInput className="ik-converter-container__converter-input" currency={this.props.currency} operation="Source" onValueChange={this.onValue1Change} onAbrChange={this.onAbr1Change} currentValue={field2} />
        <ConverterInput className="ik-converter-container__converter-input" currency={this.props.currency} operation="Destination" onValueChange={this.onValue2Change} onAbrChange={this.onAbr2Change} currentValue={field1} />
      </div>
    )
  }
}
