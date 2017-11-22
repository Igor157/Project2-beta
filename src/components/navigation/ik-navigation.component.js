import React from "react";
import ReactDOM from "react-dom";
import styles from './ik-navigation.style.css';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

export class Navigation extends React.Component {
  render() {
    const pageElementClass = this.props.className;
    return (
      <div className={`ik-navigation ${pageElementClass}`}>
        <NavLink
          to='/about'
        > About
        </NavLink>
        <NavLink
          to='/'
        > Home
        </NavLink>
        <NavLink
          to='/pricing'
        > Pricing
        </NavLink>
        <NavLink
          to='/blog'
        > Blog
        </NavLink>
        <NavLink
          to='/converter'
        > Converter
        </NavLink>
      </div>
    );
  }
}