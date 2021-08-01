import React from "react";
import PropTypes from "prop-types";

const InputText = (props) => (
  <>
    <label htmlFor={props.id} className="form-label">
      {props.label}
    </label>
    <input
      type="text"
      className="form-control"
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  </>
);

InputText.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

InputText.defaultProps = {};

export default InputText;
