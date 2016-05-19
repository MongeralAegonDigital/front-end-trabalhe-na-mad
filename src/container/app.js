import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from '../components/search';
import Profile from '../components/profile';
import Repositories from '../components/repositories';

import { getProfile, getRepositories } from '../actions';

// Stylesheets
require('../../style/app.scss');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: {
        username: 'educostachaves',
      },
      repositories: []
    }
  }

  componentDidMount() {
    this.props.getProfile(this.state.profile.username);
    this.props.getRepositories(this.state.profile.username);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <section id="card">
          <Search
              getProfile={this.props.getProfile}
              getRepositories={this.props.getRepositories} />
          <Profile data={this.props.profile} />
          <Repositories data={this.props.repositories} />
        </section>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    repositories: state.repositories,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProfile: (username) => {
      dispatch(getProfile(username))
    },
    getRepositories: (username) => {
      dispatch(getRepositories(username))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
