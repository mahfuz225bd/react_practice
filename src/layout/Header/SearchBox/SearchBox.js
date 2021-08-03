import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = (props) => (
  <form
    className="d-flex border border-secondary mx-1"
    onSubmit={props.onSubmit}
    autoComplete={props.autoComplete ? 'on' : 'off'}
  >
    <input
      className="form-control border-0 rounded-0"
      type="search"
      placeholder=" Search"
      aria-label="Search"
      value={props.value}
      id={props.id}
      onChange={props.onChangeSearchInput}
    />
    <button className="btn text-white-50 border-0" type="submit">
      <i className="fa fa-search" aria-hidden="true"></i>
    </button>
  </form>
);

SearchBox.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChangeSearchInput: PropTypes.func.isRequired,
  autoComplete: PropTypes.bool,
};

SearchBox.defaultProps = {
  id: 'search',
  value: '',
  autoComplete: false,
};

export default SearchBox;
