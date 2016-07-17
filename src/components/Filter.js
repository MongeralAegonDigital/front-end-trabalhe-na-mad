import React, { Component } from 'react';
import { FormControl, FormGroup, Row, Col } from 'react-bootstrap';

export default class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    e.preventDefault();

    const ownerName = document.getElementById('repositoryOwner').value;
    this.setState({ value: ownerName });

    if (typeof this.props.onFilter === 'function') {
      this.props.onFilter(ownerName);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleChange.bind(this)}>
        <Row>
          <Col xs={8}>
            <FormGroup bsSize="large">
              <FormControl id="repositoryOwner" type="text" placeholder="Large text" placeholder="Enter the repositories owner name you want to find"/>
            </FormGroup>
          </Col>

          <Col xs={4}>
            <FormGroup bsSize="lg">
              <FormControl
                type="submit"
                value="Find"
                className="btn btn-primary"
              />
            </FormGroup>
          </Col>
        </Row>
      </form>
    );
  }
}
