import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ik-toggle-navigation.style.css';
import {
  NavLink
} from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

export class ToggleNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <Navbar color="faded" light>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink
                className="ik-navigation__button"
                to='/'
              > Currencies
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="ik-navigation__button"
                to='/calculator'
              > Calculator
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="ik-navigation__button"
                to='/about'
              > About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="ik-navigation__button"
                to='/favorite'
              > Favorite
                    <div className="ik-navigation__counter">
                  {this.props.counter ?
                    this.props.counter : ''}
                </div>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}