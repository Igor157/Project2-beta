import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ik-navigation.style.css';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import MediaQuery from 'react-responsive';
import { ToggleNavigation } from '../toggle-navigation';

export class Navigation extends React.Component {
  render() {
    const pageElementClass = this.props.className;
    return (
      <div className={`ik-navigation ${pageElementClass}`}>
        <MediaQuery query="(min-width: 700px)">
          <NavLink
            className="ik-navigation__button"
            to='/'
          > Currencies
        </NavLink>
          <NavLink
            className="ik-navigation__button"
            to='/calculator'
          > Calculator
        </NavLink>
          <NavLink
            className="ik-navigation__button"
            to='/about'
          > About
        </NavLink>
          <NavLink
            className="ik-navigation__button"
            to='/favorite'
          > Favorite
        <div className="ik-navigation__counter">
              {this.props.counter ?
                this.props.counter : ''}
            </div>
          </NavLink>
        </MediaQuery>
        <MediaQuery query="(max-width: 700px)">
          <ToggleNavigation counter={this.props.counter} />
        </MediaQuery>
      </div>
    );
  }
}