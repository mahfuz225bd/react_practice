import React from "react";
import PropTypes from "prop-types";

const SelectInputItem = props => (
  <option value={props.value}>{props.label}</option>
);

const SelectInputArea = (props) => (
  <>
    <label className="fs-5">{props.label}</label>
    <select className="form-select form-select-lg mb-3" style={{width: '375px'}}>{props.children}</select>
  </>
);

const SelectInput = (props) => (
  <SelectInputArea label={props.label}>
    {props.data.map(each => (<SelectInputItem value={each.value} label={each.label} />))}
  </SelectInputArea>
);

SelectInput.propTypes = {
  data: PropTypes.object
};

SelectInput.defaultProps = {};

export default SelectInput;
