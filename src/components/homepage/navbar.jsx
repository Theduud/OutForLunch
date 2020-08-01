import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBContainer
} from "mdbreact";

class NavBar extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed
    });
  };

  componentDidMount() {
    document.querySelector("nav").style.height = "65px";
  }

  componentWillUnmount() {
    document.querySelector("nav").style.height = "auto";
  }
  render() {
    const { collapsed } = this.state;
    const navStyle = {};
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    const navBarItemClass = "light-text";

    return (
      <Router>
        <div>
          <MDBNavbar
            color="elegant-color-dark"
            style={navStyle}
            dark
            expand="md"
            fixed="top"
            scrolling
            // transparent
          >
            <MDBContainer>
              <MDBNavbarBrand>
                <strong className={navBarItemClass}>Out For Lunch</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.handleTogglerClick} />
              <MDBCollapse isOpen={collapsed} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink className={navBarItemClass} to="#!">
                      Home
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className={navBarItemClass} to="#!">
                      Link
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className={navBarItemClass} to="#!">
                      Profile
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBFormInline waves>
                      <div className="md-form my-0"></div>
                    </MDBFormInline>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          {collapsed && overlay}
        </div>
      </Router>
    );
  }
}

export default NavBar;
