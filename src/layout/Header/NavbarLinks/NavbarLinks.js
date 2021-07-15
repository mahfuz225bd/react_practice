import React from "react";
import PropTypes from "prop-types";
import DropDownLinks from "./DropDownLinks/DropDownLinks";

const NavItem = props => (
  <li className="nav-item">
    <a className="nav-link" href={props.href}>
      {props.label}
    </a>
  </li>
);

const NavbarLinks = props => (
  <>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {props.navLinks.map(navLink => (
        <NavItem href={navLink.href} label={navLink.label} />
      ))}      
      <DropDownLinks
        id="navbarDropdown"
        label="Components"
        dropDownLinks={props.dropDown1Links}
      />
    </ul>
  </>
);

NavbarLinks.propTypes = {};

NavbarLinks.defaultProps = {};

export default NavbarLinks;
