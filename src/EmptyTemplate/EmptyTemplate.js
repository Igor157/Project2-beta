import React from "react";
import ReactDOM from "react-dom";
import styles from './.ik-output.css';

// TODO: rename to empty hint/template
export class EmptyTemplate extends React.Component {
  render() {
    const pageElementClass = this.props.className
    return (
      <div className={`ik-output ${pageElementClass}`} >
        Select any currency
      </div>
    );
  }
}