import React from 'react';
// import PropTypes from 'prop-types';
import SimpleCalculator from '../../components/SimpleCalculator/SimpleCalculator';

// import enableAllBootstrapPopovers from '../../assets/js/enableAllBootstrapPopovers';
// import enableAllBootstrapTooltips from '../../assets/js/enableAllBootstrapTooltips';

class Calculator extends React.Component {
  // handleLoad() {
  //   enableAllBootstrapTooltips();
  // }

  render() {
    return (
      <div className="container pt-3">
        {/* ^^^ onLoad={handleLoad()} ^^^ */}
        <h2>A Simple Calcultaor</h2>
        <SimpleCalculator />
      </div>
    );
  }
}

// Calculator.propTypes = {};

// Calculator.defaultProps = {};

export default Calculator;
