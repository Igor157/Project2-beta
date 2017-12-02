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
          className="ik-navigation__button"
          to='/'
        > Currencies
        </NavLink>
        <NavLink
          className="ik-navigation__button"
          to='/calculator'
          activeClassName="ik-navigation__button--selected"
        > Calculator
        </NavLink>
        <NavLink
          className="ik-navigation__button"
          to='/about'
          activeClassName="ik-navigation__button--selected"
        > About
        </NavLink>
        <NavLink
          className="ik-navigation__button"
          to='/favorite'
          activeClassName="ik-navigation__button--selected"
        > Favorite
        <div className="ik-navigation__counter">
            {this.props.counter ?
              this.props.counter : ''}
          </div>
        </NavLink>
      </div>
    );
  }
}