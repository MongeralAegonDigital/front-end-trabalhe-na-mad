import React from 'react';
import Generic from './model';

export default class SearchBox extends Generic {
    constructor(props, context) {
        super(props);

        this.findUsers = this.findUsers.bind(this);
    };

    findUsers(e) {
        var value = document.getElementById('searchUsers').value;

        this.context.router.push({
            pathname: '/search',
            query: {q: value}
        })
    };

    render() {
        return (
            <div className="search-box">
                <input type="text" name="users" id="searchUsers" placeholder="Buscar usuário" />
                <button onClick={this.findUsers}>Enviar</button>
            </div>
        )
    }
}