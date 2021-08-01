import React from 'react';
// import PropTypes from 'prop-types';
import styles from './SimpleCalculator.module.css';

import { ButtonPanel, Button } from './ButtonPanel/ButtonPanel';
import Display from './Display/Display';
import { DataList, DataListItem } from '../DataList/DataList';

import {
  buttonValues,
  DIV_SIGN,
  MUL_SIGN,
} from '../../assets/data/buttonValues';

class SimpleCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      outputValue: '0',
      history: [],
    };

    this.hanldeInputValue = this.hanldeInputValue.bind(this);
    this.handleOutputValue = this.handleOutputValue.bind(this);
    this.hanldeInsertInputValue = this.hanldeInsertInputValue.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleAllClear = this.handleAllClear.bind(this);
    this.hanldeEvalInput = this.hanldeEvalInput.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
    this.handleClearAllHistory = this.handleClearAllHistory.bind(this);
  }

  updateHistory(inputValue, outputValue) {
    const { history } = this.state;
    this.setState({
      history: [
        ...history,
        {
          input: inputValue,
          output: outputValue,
        },
      ],
    });
  }

  hanldeInputValue(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleOutputValue(event) {
    this.setState({ outputValue: event.target.value });
  }

  hanldeInsertInputValue(event) {
    const targetText = event.target.innerText;
    this.setState({
      inputValue: this.state.inputValue + targetText,
    });
  }

  handleClear() {
    const { inputValue } = this.state;
    this.setState({
      inputValue: inputValue.slice(0, -1),
    });
  }

  handleAllClear() {
    this.setState({
      inputValue: '',
      outputValue: '0',
    });
  }

  hanldeEvalInput() {
    const { inputValue } = this.state;
    let getValidCalcInput = inputValue.replace(/×/gi, '*').replace(/÷/gi, '/');

    // Try: Set outputValue at state \w eval getValidCalcInput
    // Catch: Replce extra zeros \w "" (at the beginning)
    //        + Else: Set state.outputValue = "Invalid Calc"
    try {
      // If provided inputValue
      if (inputValue) {
        const evalValue = eval(getValidCalcInput);
        if (String(evalValue).length > 15) {
          this.setState({
            inputValue: '',
            outputValue: 'Output exceed',
          });
        } else {
          this.setState({
            inputValue: '',
            outputValue: evalValue,
          });
          // Update history
          this.updateHistory(inputValue, evalValue);
        }
      }
    } catch (error) {
      if (
        error instanceof SyntaxError &&
        error.message === 'Octal literals are not allowed in strict mode.'
      ) {
        getValidCalcInput = getValidCalcInput.replace(/^0+/, '');
      } else if (isNaN(inputValue)) {
        this.setState({ inputValue: '', outputValue: 'Invalid Input' });
      } else {
        this.setState({ inputValue: '', outputValue: 'Invalid Input' });
      }
    }
  }

  handleOperation(event) {
    const { inputValue, outputValue } = this.state;
    const targetText = event.target.innerText;
    if (!inputValue) {
      this.setState({ inputValue: outputValue + targetText });
    } else {
      this.hanldeInsertInputValue(event);
    }
  }

  handleClearAllHistory() {
    this.setState({
      history: [],
    });
  }

  render() {
    const { inputValue, outputValue, history } = this.state;

    return (
      <div className="container row">
        <div className="col">
          <form className={styles['calc-form']}>
            <Display
              inputValue={inputValue}
              inputOnChange={this.hanldeInputValue}
              outputValue={outputValue}
              outputOnChange={this.handleOutputValue}
              onClearInput={this.handleClear}
            />
            <ButtonPanel>
              {buttonValues.map((each, index) =>
                // ['AC']
                each === 'AC' ? (
                  <Button
                    value={each}
                    onClick={this.handleAllClear}
                    key={index}
                  />
                ) : // ['=']
                each === '=' ? (
                  <Button
                    value={each}
                    onClick={this.hanldeEvalInput}
                    key={index}
                  />
                ) : // ['+', '-', '×', '÷', '%']
                ['+', '-', MUL_SIGN, DIV_SIGN, '%'].includes(each) ? (
                  <Button
                    value={each}
                    onClick={this.handleOperation}
                    key={index}
                  />
                ) : (
                  // Else
                  <Button
                    value={each}
                    onClick={this.hanldeInsertInputValue}
                    key={index}
                  />
                )
              )}
            </ButtonPanel>
          </form>
        </div>
        <div className="col">
          <DataList title="History" onClearAll={this.handleClearAllHistory}>
            {[...history].reverse().map((each, index) => (
              <DataListItem key={index}>
                <span className="fs-5 ms-auto">
                  {each.input} <br />
                  {each.output} =
                </span>
              </DataListItem>
            ))}
          </DataList>
        </div>
      </div>
    );
  }
}

// SimpleCalculator.propTypes = {};

// SimpleCalculator.defaultProps = {};

export default SimpleCalculator;
