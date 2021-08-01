import React from 'react';
import PropTypes from 'prop-types';

import InputText from '../../components/InputText/InputText';
import {
  DataList,
  DataListItem,
  DeleteButton,
} from '../../components/DataList/DataList';

const faker = require('faker');

const AddNameForm = (props) => (
  <form className="d-flex" onSubmit={props.onSubmit} autocomplete="off">
    <div>
      <InputText
        label="Name"
        id="name"
        placeholder="Enter your name"
        value={props.inputValue}
        onChange={props.inputOnChange}
        onFocus={props.inputOnFocus}
        onBlur={props.inputOnBlur}
      />
    </div>
    <div className="align-self-end">
      <button type="submit" className="btn btn-primary ms-1">
        <i className="fas fa-plus"></i> Add
      </button>
    </div>
  </form>
);

class NameInputExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputValue: '',
      inputFocused: false,
      searchValue: '',
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleInputFocusBlur = this.handleInputFocusBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClearAll = this.handleClearAll.bind(this);
  }

  handleInputValue(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit(event) {
    const { inputValue } = this.state;
    event.preventDefault();
    if (inputValue) {
      this.setState({
        data: [
          ...this.state.data,
          {
            id: faker.datatype.uuid(),
            name: inputValue,
          },
        ],
      });
    }
    this.setState({ inputValue: '' });
  }

  handleInputFocusBlur() {
    this.setState({
      inputFocused: document.querySelector('#name') === document.activeElement,
    });
  }

  handleDelete(target_id) {
    this.setState({
      data: [...this.state.data].filter((each) => each.id !== target_id),
    });
  }

  handleClearAll() {
    this.setState({
      data: [],
    });
  }

  render() {
    const { inputValue, inputFocused, data } = this.state;
    return (
      <div className="container pt-3">
        <h2>Name Input Example</h2>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col ms-auto">
            <AddNameForm
              onSubmit={this.handleSubmit}
              inputValue={inputValue}
              inputOnChange={this.handleInputValue}
              inputOnFocus={this.handleInputFocusBlur}
              inputOnBlur={this.handleInputFocusBlur}
            />
            <br />
            {inputFocused && inputValue ? (
              <h3>Input: {inputValue}</h3>
            ) : !this.state.inputFocused && inputValue ? (
              <h1>Input: {inputValue}</h1>
            ) : (
              ''
            )}
          </div>
          <div className="col me-auto">
            <DataList
              title="Name List"
              footerText={`Total Record(s): ${data.length}`}
              onClearAll={this.handleClearAll}
            >
              {data.map((each) => (
                <DataListItem key={each.id}>
                  {each.name}
                  <DeleteButton onClick={() => this.handleDelete(each.id)} />
                </DataListItem>
              ))}
            </DataList>
          </div>
        </div>
      </div>
    );
  }
}

AddNameForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputOnChange: PropTypes.func.isRequired,
  inputOnFocus: PropTypes.func.isRequired,
  inputOnBlur: PropTypes.func.isRequired,
};

// NameInputExample.propTypes = {};

// NameInputExample.defaultProps = {};

export default NameInputExample;
