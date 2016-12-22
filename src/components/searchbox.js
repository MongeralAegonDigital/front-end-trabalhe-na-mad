import React from 'react';
import Generic from './model';
import { Link } from 'react-router'

export default class SearchBox extends Generic {
    constructor(props, context) {
        super(props);

        this.findUsers = this.findUsers.bind(this);
    };

    findUsers(e) {
        e.preventDefault();
        var value = document.getElementById('searchUsers').value;

        this.context.router.push({
            pathname: '/search',
            query: {q: value}
        })
    };

    renderResultInformations() {
        if (this.props.query) {
            return (
                <div className="result-informations">
                    <p>Mostrando resultados para <b>{this.props.query}</b></p>
                    <Link to="/" className="clear-filters">Limpar filtros <b>X</b></Link>
                </div>
            )
        }
    };

    render() {
        return (
            <div className="search-box">
                <form onSubmit={this.findUsers}>
                    <input type="text" name="users" id="searchUsers" placeholder="Buscar usuário" value={this.props.query} readOnly={this.props.query} required />
                    <input type="submit" value="Enviar" />
                </form>
                {this.renderResultInformations()}
            </div>
        )
    }
}
