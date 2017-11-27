import React from 'react';
import ReactDOM from 'react-dom';
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
          to='/'
        > Currencies
        </NavLink>
        <NavLink
          to='/calculator'
        > Calculator
        </NavLink>
        <NavLink
          to='/about'
        > About
        </NavLink>
        <NavLink
          to='/favorite'
        > Favorite
        <span className="ik-navigation">
            {this.props.counter ?
              this.props.counter : ''}
          </span>
        </NavLink>
      </div>
    );
  }
}