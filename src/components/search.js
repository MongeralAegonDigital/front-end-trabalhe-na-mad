import React, { Component } from 'react';

export default class Search extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.getProfile !== this.props.getProfile;
  }

  render() {
    console.log('render search');
    return (
      <div className="search">
         <form onSubmit={this.handleForm.bind(this)}>
           <input
              type="search"
              ref="username"
              className="search-input"
              placeholder="Digite o username e tecle Enter"/>
         </form>
      </div>
    )
  }

  handleForm(e) {
   e.preventDefault();
    let username = this.refs.username.value
    this.props.getProfile(username);
    this.props.getRepositories(username);
    this.refs.username.value = '';
  }
}
