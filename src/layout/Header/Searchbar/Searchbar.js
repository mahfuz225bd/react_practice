import React from 'react';
import PropTypes from 'prop-types';


const Searchbar = () => (
  <>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </>
);

Searchbar.propTypes = {};

Searchbar.defaultProps = {};

export default Searchbar;