/* globals window */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid } from 'react-bootstrap';
import $ from 'jquery';

import Filter from './components/Filter';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repositories: this.props.data || {},
      filterValue: 'octokit'
    };
  }

  onFilter (value) {
    this.setState({
      filterValue: value
    });
  }

  componentDidMount() {
    const filterValue = this.state.filterValue;

    $.get('https://api.github.com/orgs/' + filterValue + '/repos').done(function(data) {
      this.setState({repositories: data});
    }.bind(this));
  }

  render() {
    if (this.state.repositories) {
      return (
        <Grid>
          <h2>{this.state.filterValue}'s repositories list</h2>
          <List items={this.state.repositories} />
        </Grid>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
