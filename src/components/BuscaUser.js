import React, { Component }  from 'react'
import {getUserResponses} from '../actions/GetUserActions'
import CampoBusca from './CampoBusca'
import LayoutUser from './LayoutUser'

import {connect}    from 'react-redux'
@connect((store) => {
    return {
        GitApi: store.GitApi.GitApi,
        GitApiFetched: store.GitApi.fetched
    }
})

export default class BuscaUser extends Component {
    constructor() {
        super();
        this.handleUser = this.handleUser.bind(this);
    }

    handleUser(e) {
        let user =  document.getElementById('nome_user');
        if(user.value === "") {
            user.style.borderColor = "red";
            user.placeholder = "Campo obrigatório em branco";

        } else {
            user.style.borderColor = "inherit";
            this.props.dispatch(getUserResponses(user.value, user))
        }
        e.preventDefault();
    }

    render() {
        return (
            <section className="container">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s12">
                      <span className="error" id="errorss">usuário não autenticado ou não encontrado</span>
                      <CampoBusca id="nome_user" type="text" className="validate" placeholder="Nome de Usúario"/>
                    </div>
                  </div>
                  <button type="submit" className="btn blue-grey darken-4" onClick={this.handleUser}>Enviar</button>
                </form>
                <LayoutUser/>
            </section>
        )
    }
}
