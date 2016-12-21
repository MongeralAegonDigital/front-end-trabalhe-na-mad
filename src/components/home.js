import React from 'react';
import Generic from './model';
import SearchBox from './searchbox';

export default class Home extends Generic {
    render() {
        return (
            <div className="home">
                <header>
                    <h3>Encontre repositórios por usuários no Github</h3>
                </header>
                <SearchBox />
                {this.props.children}
            </div>
        )
    }
};