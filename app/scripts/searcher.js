import React from 'react';
import axios from 'axios';

const Result = React.createClass({

  render() {
    return(
      <div className="col-md-6 col-md-offset-3"><br />
        <img className="img-circle img-responsive" src={this.props.user.avatar_url}></img><br />
        <a className="col-md-6 col-md-offset-3 lead text-center" href={this.props.user.html_url}>{this.props.user.login}</a><br />
        <p className="text-center">{this.props.user.email}</p>
      </div>
    );
  }
});

const SearchForm =  React.createClass({
  search() {
      axios.get("https://api.github.com/users/" + this.state.userName)
      .then((response) => this.setState({
        userName: this.state.userName,
        user: response.data
      }))
      .catch((error) => console.error(error));
  },
  getInitialState: function() {
    return {userName: "", user: {}};
  },
  handleChange: function(event){
    this.setState({userName: event.target.value});
  },
  render() {
    return(
      <div className="col-md-6 col-md-offset-3">
          <div className="formGroup">
            <label className="help-block">Search for a GitHub user:</label>
            <input className="form-control" type="text" onChange={this.handleChange}/><br />
            <button className="btn btn-primary btn-lg col-md-6 col-md-offset-3" onClick={this.search}>Search!</button>
          </div>
          <Result user={this.state.user}/>
      </div>

    );
  }
});

export default (<SearchForm />)
