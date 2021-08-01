import React from 'react';
// import PropTypes from 'prop-types';
import SelectInput from '../../components/SelectInput/SelectInput';

import data from '../../assets/data/programmingLanguages';

const SelectInputExample = () => (
  <div className="container pt-3">
    <h2>Select Input Example</h2>
    <br />
    <SelectInput data={data} inputLabel="Select a Programming Language" />
  </div>
);

// SelectInputExample.propTypes = {};

// SelectInputExample.defaultProps = {};

export default SelectInputExample;
