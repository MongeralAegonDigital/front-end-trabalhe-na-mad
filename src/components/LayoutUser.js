import React, { Component }  from 'react'
import {getUserResponses} from '../actions/GetUserActions'
import {connect}    from 'react-redux'

@connect((store) => {
    return {
        GitApi: store.GitApi.GitApi,
        GitApiFetched: store.GitApi.fetched
    }
})

export default class LayoutUser extends Component {
    constructor() {
        super();
    }

    render() {
        const {GitApi} = this.props;
        if(GitApi != null) {
            let userinfo =
                <div>
                    <img src={GitApi.state.data[0].owner.avatar_url}/>
                    <h1>{GitApi.state.data[0].owner.login}</h1>
                </div>;

            let repo = GitApi.state.data.map((dadosRepositorios) => {
                return (
                    <div key={dadosRepositorios.id}>
                        <h2>Repositório: {dadosRepositorios.name}</h2>
                        <ul>
                            <li><span className="layout-repositorio--title">Forks:</span> {dadosRepositorios.forks}</li>
                            <li><span className="layout-repositorio--title">Clone:</span> {dadosRepositorios.clone_url}</li>
                        </ul>
                    </div>
                )
            })
            return (
                <div className="row layout">
                    <div className="col s12 layout-user--info">{userinfo}</div>
                    <div className="col s12 layout-repositorio">{repo}</div>
                </div>
            )
        }
        return (
            <span></span>
        )
    }
}
