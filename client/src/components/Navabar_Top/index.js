import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
//Import Css
import "./index.css"
// import "assets/css/themify-icons.css"
export default class NavabarTop extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="navabar-Top">
        <Navbar light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                  <Link className="nav-link" to="/home">Home</Link>
              </NavItem>
              <NavItem>
                  <Link className="nav-link" to="/login">Sign In</Link>
              </NavItem>
              <NavItem>
                  <Link className="nav-link" to="/logout">Sign Up</Link>
              </NavItem>
            </Nav>
            <div className="Area-icon">
              <Link to="/favorite"><i className="ti-heart" aria-hidden="true"></i></Link>
              <Link to="/heart"><i className="ti-search" aria-hidden="true"></i></Link>
              <Link to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link>
            </div>
          </Collapse>
        </Navbar>
        <div className="search">
          <input type="text" placeholder="Search here"/>
          <span> <i className="ti-close"></i></span>
        </div>
      </div>
    );
  }
}