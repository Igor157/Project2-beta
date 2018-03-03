import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ik-empty-template.style.scss';


export class EmptyTemplate extends React.Component {
  render() {
    const pageElementClass = this.props.className;
    return (
      <div className={`ik-empty-template ${pageElementClass}`} >
        Select any currency
      </div>
    );
  }
}