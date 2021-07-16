import React from "react";
import PropTypes from "prop-types";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import Searchbar from "./Searchbar/Searchbar";

const Brand = (props) => (
  <a href="/" className="navbar-brand">
    {props.name}
  </a>
);

const TogglerButton = (props) => (
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target={props.target}
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
);

const navLinks = [
  {
    href: '/',
    label: 'Home'
  },
  {
    href: '/about',
    label: 'About'
  },
  {
    href: '/services',
    label: 'Services'
  },
  {
    href: '/products',
    label: 'Products'
  },
  {
    href: '/contact',
    label: 'Contact'
  }
]

const dropDownLinks = [
  {
    href: '/components/profiles',
    label: 'Profiles'
  },
  {
    href: '/components/navbar',
    label: 'Navbar'
  },
  {
    href: '/components/posts',
    label: 'Posts'
  },
  {
    href: '/components/youtube_search_result',
    label: 'Youtube Search Result'
  },
  {
    href: '/components/timer_app',
    label: 'Timer App'
  },
  {
    href: '/components/calculator',
    label: 'Calculator'
  },
  {
    href: '/components/event_handler_examples',
    label: 'Event Handler Examples'
  },
  {
    href: '/components/two_way_data_binding',
    label: 'Two Way Data Binding'
  },
  {
    href: '/components/select_input',
    label: 'Select Input'
  }
]

const Header = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Brand name="Logo" />
        <TogglerButton target="#navbarSupportedContent" />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavbarLinks navLinks={navLinks} dropDown1Links={dropDownLinks} />
          <Searchbar />
        </div>        
      </div>
    </nav>
  </>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
