import React from "react";
import ReactDOM from "react-dom";
import styles from './ik-empty-template.style.css';

// TODO: rename to empty hint/template
export class EmptyTemplate extends React.Component {
  render() {
    const pageElementClass = this.props.className
    return (
      <div className={`ik-empty-template ${pageElementClass}`} >
        Select any currency
      </div>
    );
  }
}