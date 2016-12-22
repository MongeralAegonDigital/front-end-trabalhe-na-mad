import React from 'react';
import { connect } from 'react-redux'
import { Collection }  from './model';
import { add } from '../actions/repository'
import Loading from './loading'


class ReposList extends Collection {
    urlRoot() {
        return `users/${this.props.params.userLogin}/repos`
    };

    renderItems() {
        return this.props.data.map((repo, i) => {
            return (
                <li key={i}>
                    <a href={repo.html_url} target="_blank">
                        <h3>{repo.name}</h3>
                        <p>{repo.description}</p>
                    </a>
                </li>
            )
        })
    };

    render() {
        if (this.state.loading) {
            return <Loading />
        } else {
            return (
                <div className="repository">
                    <span className="go-back" onClick={this.context.router.goBack}>Voltar para listagem de usuário</span>
                    <div className="result-container">
                        <header>
                            <h3>Mostrando repositórios de <b>{this.props.params.userLogin}</b></h3>
                        </header>
                        <ul className="result-container">
                            {this.renderItems()}
                        </ul>
                    </div>
                </div>
            )
        }
    }
};

export default connect(
  state => ({ data: state.repository.data }),
  { add }
)(ReposList)
