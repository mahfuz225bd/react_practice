import React from "react";
import PropTypes from "prop-types";

const DropDownLinks = (props) => (
  <>
    <a
      class="nav-link dropdown-toggle"
      href="#"
      id={props.id}
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {props.label}
    </a>
    <ul class="dropdown-menu" aria-labelledby={props.id}>
      {props.dropDownLinks.map((dropDownLink) => (
        <li>
          <a class="dropdown-item" href={dropDownLink.href}>
            {dropDownLink.label}
          </a>
        </li>
      ))}
    </ul>
  </>
);

const NavbarLinks = (props) => (
  <>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {props.navLinks.map((navLink) => (
        <li className="nav-item">
          <a className="nav-link" href={navLink.href}>
            {navLink.label}
          </a>
        </li>
      ))}
      <li className="nav-item dropdown">
        <DropDownLinks
          id="navbarDropdown"
          label="Components"
          dropDownLinks={props.dropDown1Links}
        />
      </li>
    </ul>
  </>
);

NavbarLinks.propTypes = {};

NavbarLinks.defaultProps = {};

export default NavbarLinks;
