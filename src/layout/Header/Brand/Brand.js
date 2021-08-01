import React from 'react';
import PropTypes from 'prop-types';

const Brand = (props) => (
  <a className="navbar-brand" href="/">
    {props.name}
  </a>
);

Brand.propTypes = {
  name: PropTypes.string,
};

Brand.defaultProps = {
  name: 'Logo',
};

export default Brand;
