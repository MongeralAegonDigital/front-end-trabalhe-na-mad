import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

export default class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    e.preventDefault();
    console.log('form-data', this);
    this.setState({ value: e.target.value });

    if (typeof this.props.onFilter === 'function') {
      this.props.onFilter(e.target.value);
    }
  }

  render() {
    const { title } = this.props;

    return (
      <form onSubmit={this.handleChange.bind(this)}>
        <FormGroup controlId="formBasicText" bsSize="lg">
          <ControlLabel>{title}</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter the repository owner name you want to find"
          />
          <FormControl
            type="submit"
            value="Find"
            className="btn btn-primary"
          />
        </FormGroup>
      </form>
    );
  }
}
