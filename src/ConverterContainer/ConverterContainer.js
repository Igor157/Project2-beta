import React from "react";
import ReactDOM from "react-dom";
import styles from './.ik-converter-container.css';
import { ConverterInput } from '../ConverterInput/ConverterInput.js';
import { services } from '../Services/Services.js';
import { ConverterButton } from '../ConverterButton/ConverterButton.js';


export class ConverterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { converterView: true };
    this.onValue1Change = this.onValue1Change.bind(this);
    this.onValue2Change = this.onValue2Change.bind(this);
    this.onAbr1Change = this.onAbr1Change.bind(this);
    this.onAbr2Change = this.onAbr2Change.bind(this);
    this.converterOnclick = this.converterOnclick.bind(this);
  }

  onValue1Change(target) {
    this.setState({
      inputValue: target,
      currentAbr: this.state.input1Abr
    });
  }
  onValue2Change(target) {
    this.setState({
      inputValue: target,
      currentAbr: this.state.input2Abr
    });
  }
  onAbr1Change(target) {
    this.setState({
      input1Abr: target,
      current1Rate: this.props.currency.filter((item) => item.Cur_Abbreviation == target)[0].Cur_OfficialRate
    });
  }
  onAbr2Change(target) {
    this.setState({
      input2Abr: target,
      current2Rate: this.props.currency
        .filter((item) => item.Cur_Abbreviation == target)[0]
        .Cur_OfficialRate
    });
  }
  converterOnclick() {
    this.setState(prevState => ({
      converterView: !prevState.converterView
    }));
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
    const field1 = (currentAbr === abr1) ? services.tryConvert(value, cur1, cur2, services.moneyConvert) : value;
    const field2 = (currentAbr === abr2) ? services.tryConvert(value, cur2, cur1, services.moneyConvert) : value;
    let converterView = "";
    if (this.state.converterView) {
      converterView = "hidden";
    }
    // TODO: new lines for attributes
    return (
      <div className={`ik-converter-container ${pageElementClass}`}>
        <ConverterButton
          className="ik-converter-container__button" 
          converterOnclick={this.converterOnclick}
          converterView={this.state.converterView}
        />
        <div className={`ik-converter-container__field ${converterView}`}>
          <div className="ik-converter-container__tittle"> Currency converter</div>
          <hr></hr>
          <ConverterInput
            className="ik-converter-container__converter-input"
            currency={this.props.currency}
            operation="Source"
            onValueChange={this.onValue1Change}
            onAbrChange={this.onAbr1Change}
            currentValue={field2}
          />
          <ConverterInput
            className="ik-converter-container__converter-input"
            currency={this.props.currency}
            operation="Destination"
            onValueChange={this.onValue2Change}
            onAbrChange={this.onAbr2Change}
            currentValue={field1}
          />
        </div>
      </div>
    )
  }
}
ConverterContainer.defaultProps = { currency: []};
