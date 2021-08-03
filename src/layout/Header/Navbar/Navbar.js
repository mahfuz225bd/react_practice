import React from 'react';
import PropTypes from 'prop-types';

const NavbarItem = (props) => (
  <li className="nav-item">
    <a className={`nav-link ${props.active && 'active'}`} href={props.href}>
      <i className={props.iconClass} aria-hidden="true"></i> {props.label}
    </a>
  </li>
);

const Navbar = (props) => (
  <div className="collapse navbar-collapse show" id={props.id}>
    <ul className="navbar-nav">{props.children}</ul>
  </div>
);

NavbarItem.prototype = {
  href: PropTypes.string,
  label: PropTypes.string,
  activated: PropTypes.bool,
  iconClass: PropTypes.string,
};

NavbarItem.defaultProps = {
  href: '#',
  active: false,
};

Navbar.propTypes = {
  id: PropTypes.string,
};

// Navbar.defaultProps = {};

export { Navbar, NavbarItem };
