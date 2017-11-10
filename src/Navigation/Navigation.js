import React from "react";
import ReactDOM from "react-dom";
import styles from './.ik-nav.css';

export class Navigation extends React.Component {
  render() {
    const pageElementClass = this.props.className;
    return (
      <div className={`ik-nav ${pageElementClass}`}>
        <a className="ik-nav__button" href="">About</a>
        <a className="ik-nav__button" href="">Home</a>
        <a className="ik-nav__button" href="">Pricing</a>
        <a className="ik-nav__button" href="">Blog</a>
      </div>
    );
  }
}