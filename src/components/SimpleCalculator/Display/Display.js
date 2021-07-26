import React from "react";
import PropTypes from "prop-types";

import styles from "./Display.module.css";

const DisplayInput = (props) => (
  <span
    className={[props.commonClasseNames].join(" ")}
    onChange={props.onChange}
  >
    {(props.value.length <= 25
      ? props.value
      : "..." + props.value.slice(-25)) || <span>&nbsp;</span>}
  </span>
);

const DisplayOutput = (props) => (
  <span
    className={[props.commonClasseNames, styles["calc-display-output"]].join(
      " "
    )}
    onChange={props.onChange}
  >
    {props.value}
  </span>
);

const ClearBtn = (props) => (
  <span onClick={props.onClick} title="Clear Input">
    <i class="fas fa-backspace"></i>
  </span>
);

const PopoverInputValue = (props) => (
  <div
    class={["position-relative", styles["calc-display-input-popover"]].join(
      " "
    )}
    data-bs-toggle="popover"
    title="Input Value"
    data-bs-content={props.content}
    onLoad={props.onLoad}
  >
    <i class="fas fa-info-circle position-absolute top-0 start-100 translate-middle p-1"></i>
  </div>
);

function Display(props) {
  const commonClasseNames =
    "user-select-none d-block text-end py-0 px-2 font-monospace";
  return (
    <div className="d-table border border-secondary">
      <div className="d-table-cell w-100">
        <DisplayInput
          commonClasseNames={commonClasseNames}
          onChange={props.inputOnChange}
          value={props.inputValue}
        />
        <DisplayOutput
          commonClasseNames={commonClasseNames}
          onChange={props.outputOnChange}
          value={props.outputValue}
        />
      </div>
      <div className="d-table-cell align-middle pe-2">
        <PopoverInputValue content={props.inputValue} />
        <ClearBtn onClick={props.clearBtnOnClick} />
      </div>
    </div>
  );
}

Display.propTypes = {};

Display.defaultProps = {};

export default Display;
