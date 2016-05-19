import React, { Component } from 'react';

export default class Repositories extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }

  render() {
    if(!this.props.data) {
      return (
        <section className="profile">
          <div className="error">
            <p>Carregando ...</p>
          </div>
        </section>
      )
    } else {
      return (
        <section className="repositories">
          {this.props.data.map(repository => (
            <div key={repository.name} className="repository">
              <a href={repository.html_url} target="_blank">
                <h3>{repository.name}</h3>
                <p>{repository.description}</p>
              </a>
              <ul className="details">
                <li>
                  <p>{repository.stargazers_count}</p>
                  <p>Stars</p>
                </li>
                <li>
                  <p>{repository.watchers_count}</p>
                  <p>Watchers</p>
                </li>
                <li>
                  <p>{repository.forks_count}</p>
                  <p>Watchers</p>
                </li>
              </ul>
              <hr/>
            </div>
          ))}

        </section>
      );
    }

  }
}
