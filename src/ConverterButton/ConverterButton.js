import React from "react";
import ReactDOM from "react-dom";
import styles from './.ik-converter-button.css';

export class ConverterButton extends React.Component {
  render() {
    const pageElementClass = this.props.className
    return (
      <div className={`ik-converter-button ik-output ${pageElementClass}`} >
        Converter
      </div>
    );
  }
}
