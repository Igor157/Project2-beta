import React from "react";
import ReactDOM from "react-dom";
import styles from './ik-converter-button.style.css';

export class ConverterButton extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.props.converterOnclick();
  }
  render() {
    const pageElementClass = this.props.className;

    return (
      <div className={`ik-converter-button ik-output ${pageElementClass}`} onClick={this.clickHandler} >
        Converter
      </div>
    );
  }
}
