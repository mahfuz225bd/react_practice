import React from 'react';
import PropTypes from 'prop-types';

import Brand from './Brand/Brand';
import { Navbar, NavbarItem } from './Navbar/Navbar';
import SearchBox from './SearchBox/SearchBox';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };

    this.handleSearchValue = this.handleSearchValue.bind(this)
  }

  handleSearchValue(event) {
    console.log(event);
    // this.setState({
    //   searchValue: event.target.value
    // })
  }

  handleSearch(event) {
    event.preventDefault();
    // if (this.state.searchValue) {
    //   alert('The search action is not ready for search operation.')
    // }
    console.log(this.state);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <div>
            <Brand name={this.props.brandName} />
          </div>
          <div className="flex-fill">
            <SearchBox
              value={this.state.searchValue}
              onChangeSearchInput={this.handleSearchValue}
              onSubmit={this.handleSearch}
            />
          </div>
          <div>
            <Navbar>
              {this.props.navItems.map((each, index) => (
                <NavbarItem
                  href={each.href}
                  label={each.label}
                  iconClass={each.iconClass}
                  active={window.location.pathname === each.href}
                  key={index}
                />
              ))}
            </Navbar>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  brandName: PropTypes.string,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      iconClass: PropTypes.string,
      active: PropTypes.bool.isRequired,
    })
  ),
};

// Header.defaultProps = {};

export default Header;
