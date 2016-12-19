import React, { Component } from 'react';
import {UserAuth}     from '../actions/GetUserActions'

import {connect}    from 'react-redux'
@connect((store) => {
    return {
        GitApi: store.GitApi.GitApi,
        GitApiFetched: store.GitApi.fetched
    }
})

class AuthGit extends Component {
    constructor() {
        super();
        this.handleLogar = this.handleLogar.bind(this)
    }

    handleLogar() {
        this.props.dispatch(UserAuth());
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <button className="btn-github" onClick={this.handleLogar}>Logar com Github</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default AuthGit;
