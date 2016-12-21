import React from 'react';
import { connect } from 'react-redux'
import Generic from './model';
import isEmpty from 'lodash/isEmpty';
import clone from 'lodash/clone';
import { add } from '../actions/repository'
import { HOST } from '../config'

class ReposList extends Generic {
    constructor(props, context) {
        super(props);
    };

    componentDidMount() {
        this.fetchData();
    };

    fetchData() {
        var urlGithub = 'https://api.github.com/';

        fetch(`${urlGithub}users/${this.props.params.userLogin}/repos`)
        .then(response => response.json())
        .then((response) => this.props.add(response))
        .catch((error) => console.error(error))
    };

    renderItems() {
        return this.props.data.map((repo, i) => {
            return (
                <li key={i}>
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>
                </li>
            )
        })
    };

    render() {
        return (
            <div>
                <header>
                    <span onClick={this.context.router.goBack}>Voltar para listagem de usuário</span>
                    <h3>Mostrando repositórios de {this.props.params.userLogin}</h3>
                </header>
                <div className="repos-list">
                    {this.renderItems()}
                </div>
            </div>
        )
    }
};

export default connect(
  state => ({ data: state.repository.data }),
  { add }
)(ReposList)
