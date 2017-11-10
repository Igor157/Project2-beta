import React from "react";
import ReactDOM from "react-dom";
import styles from './.ik-output.css';

export class Tableplace extends React.Component {
  render() {
    const pageElementClass = this.props.className
    return (
      <div className={`ik-output ${pageElementClass}`} >
        Select any currency
      </div>
    );
  }
}