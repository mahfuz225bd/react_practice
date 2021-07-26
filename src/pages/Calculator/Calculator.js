import React from "react";
import PropTypes from "prop-types";
import SimpleCalculator from "../../components/SimpleCalculator/SimpleCalculator";

import enableAllBootstrapPopovers from "../../assets/js/enableAllBootstrapPopovers";
import enableAllBootstrapTooltips from "../../assets/js/enableAllBootstrapTooltips";

function handleLoad() {
  enableAllBootstrapTooltips();
  alert("a");
}

class Calculator extends React.Component {
  render() {
    return (
      <div className="container pt-3">
        {/* ^^^ onLoad={handleLoad()} ^^^ */}
        <h2>A Simple Calcultaor</h2>

        <br />
        <br />
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Tooltip on top"
        >
          Tooltip on top
        </button>

        <button
          type="button"
          class="btn btn-lg btn-danger"
          data-bs-toggle="popover"
          title="Popover title"
          data-bs-content="And here's some amazing content. It's very engaging. Right?"
        >
          Click to toggle popover
        </button>
        <br />
        <br />
        <br />
        <br />

        <SimpleCalculator />
      </div>
    );
  }
}

Calculator.propTypes = {};

Calculator.defaultProps = {};

export default Calculator;
