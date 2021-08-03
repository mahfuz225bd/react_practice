import React from 'react';
import PropTypes from 'prop-types';

const SelectInputItem = (props) => (
  <option value={props.value}>{props.label}</option>
);

const SelectInputArea = (props) => (
  <>
    <label className="fs-5">{props.label}</label>
    <select
      className="form-select form-select-lg mb-3"
      style={{ width: '375px' }}
    >
      {props.children}
    </select>
  </>
);

const SelectInput = (props) => (
  <SelectInputArea label={props.inputLabel}>
    {props.data.map((each, index) => (
      <SelectInputItem value={each.value} label={each.label} key={index} />
    ))}
  </SelectInputArea>
);

SelectInput.propTypes = {
  inputLabel: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// SelectInput.defaultProps = {};

export default SelectInput;
