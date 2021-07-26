import React from "react";
import PropTypes from "prop-types";

import InputText from "../../components/InputText/InputText";

const faker = require("faker");

const AddNameForm = (props) => (
  <div className="col col-md-4 p-3">
    <form className="d-flex" onSubmit={props.formOnSubmit} autocomplete="off">
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
          Add
        </button>
      </div>
    </form>
    {props.children}
  </div>
);

const NameList = (props) => (
  <div className="col p-3">
    <h5>Name List</h5>
    <ul
      className="list-group border"
      style={{
        height: "500px",
        overflow: "hidden",
        "overflow-y": "scroll",
      }}
    >
      {props.data.map((item) => (
        <li
          className="list-group-item rounded-0 border-top-0 border-start-0 border-end-0"
          key={item.id}
          id={item.id}
        >
          {item.name}
          <button
            className="btn btn-outline-danger float-end"
            onClick={props.deleteBtnOnClick}
          >
            <i class="fas fa-minus-circle"></i> Delete
          </button>
        </li>
      ))}
    </ul>
    <span>Total Record(s): {props.totalLenght}</span>
  </div>
);

const NameInputExampleArea = (props) => (
  <div className="container pt-3">
    <h2>Name Input Example</h2>
    <div className="row row-cols-1 row-cols-md-2">{props.children}</div>
  </div>
);

class NameInputExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputValue: "",
      inputFocused: false,
      searchValue: "",
    };
    this.handleInputValueChange = this.handleInputValueChange.bind(this);
    this.handleInputFocusBlur = this.handleInputFocusBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputValueChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.inputValue) {
      this.setState({
        data: [
          ...this.state.data,
          {
            id: faker.datatype.uuid(),
            name: this.state.inputValue,
          },
        ],
      });
    }
    this.setState({ inputValue: "" });
  }

  handleInputFocusBlur() {
    this.setState({
      inputFocused: document.querySelector("#name") === document.activeElement,
    });
  }

  handleDelete(event) {
    const getId = event.target.parentElement.id;
    this.setState({
      data: [...this.state.data].filter((each) => each.id !== getId),
    });
  }

  render() {
    return (
      <NameInputExampleArea>
        <AddNameForm
          formOnSubmit={this.handleSubmit}
          inputValue={this.state.inputValue}
          inputOnChange={this.handleInputValueChange}
          inputOnFocus={this.handleInputFocusBlur}
          inputOnBlur={this.handleInputFocusBlur}
        >
          <br />
          {this.state.inputFocused && this.state.inputValue ? (
            <h3>Input: {this.state.inputValue}</h3>
          ) : !this.state.inputFocused && this.state.inputValue ? (
            <h1>Input: {this.state.inputValue}</h1>
          ) : (
            ""
          )}
        </AddNameForm>
        <NameList
          data={this.state.data}
          deleteBtnOnClick={this.handleDelete}
          totalLenght={this.state.data.length}
        />
      </NameInputExampleArea>
    );
  }
}

NameInputExample.propTypes = {};

NameInputExample.defaultProps = {};

export default NameInputExample;
