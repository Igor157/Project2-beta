import React from "react";
import ReactDOM from "react-dom";
import styles from './ik-navigation.style.css';
// import {
//   HashRouter as Router,
//   Route,
//   NavLink,
//   Switch
// } from 'react-router-dom';

export class Navigation extends React.Component {
  render() {
    const pageElementClass = this.props.className;
    return (
      <div className={`ik-navigation ${pageElementClass}`}>
        <a className="ik-navigation__button" href="">About</a>
        <a className="ik-navigation__button" href="">Home</a>
        <a className="ik-navigation__button" href="">Pricing</a>
        <a className="ik-navigation__button" href="">Blog</a>
        {/* <NavLink to={`/converter`}> */}
          Converter
        {/* </NavLink> */}
      </div>
    );
  }
}