import React from 'react';
import 'assets/css/Navabar/index.css';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import { Link } from 'react-router-dom'

class Header extends React.Component {
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
      <div className="menu-area">
      <Container>
        <Navbar light expand="md">
        <NavbarBrand>
        <Link to="/">
          <img src={this.props.logo} alt={this.props.alt}/>
        </Link>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="m-auto" navbar>
            <NavItem>
                <NavLink>
                  <Link to="/">Home</Link>
                </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <Link to="/shop">Shop</Link>
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem>
                  <Link to="/">ption 1</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/">ption 2</Link>
                </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <Link to="/page">Page</Link>
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem>
                  <Link to="/">ption 1</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/">ption 2</Link>
                </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <Link to="/blog">Blog</Link>
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem>
                  <Link to="/">ption 1</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/">ption 2</Link>
                </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            
            <NavItem>
                <NavLink>
                  <Link to="/contact">Contact</Link>
                </NavLink>
            </NavItem>
            </Nav>
        </Collapse>
        <div className="Area-icon">
            <ul className="iconArea">
              <Link to="/search"><i className="fas fa-search "></i></Link>
              <Link to="/favorite"><i className="far fa-heart"></i></Link>
              <div className="dis-flex">
                <Link to="/cart"><i className="fas fa-cart-plus"></i></Link>
                <div></div>
              </div>
            </ul>
        </div>
        </Navbar>
        {/* <form className="d-flex justify-content-between search-inner">
          <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
          <button type="submit" className="btn" />
          <span className="ti-close" id="close_search" title="Close Search" />
        </form> */}
      </Container>
      </div>
    );
  }
}

export default Header;