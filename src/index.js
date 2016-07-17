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
      filterValue: ''
    };
  }

  onFilter (value) {
    this.setState({
      filterValue: value
    });
    this.getRepositories(value);
  }

  componentWillMount() {
    const filterValue = this.state.filterValue;

    if (this.state.filterValue) {
      this.getRepositories(filterValue);
    }

  }

  getRepositories(user) {
    $.get('https://api.github.com/users/' + user + '/repos').done(function(data) {
      this.setState({repositories: data});
    }.bind(this));
  }

  render() {
    if (this.state.repositories) {
      return (
        <Grid>
          <h1>GitHub - User Repositories List</h1>
          <Filter onFilter={this.onFilter.bind(this)} />
          <List items={this.state.repositories} />
        </Grid>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
