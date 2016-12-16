import React, { Component }  from 'react'
import CampoBusca from'./CampoBusca'
import axios from 'axios';

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
        this.getUserResponses = this.getUserResponses.bind(this);
    }

    handleUser(e) {
        let user =  document.getElementById('nome_user');
        console.log(user.value)
        if(user.value == "") {
            user.style.borderColor = "red";
            user.placeholder = "Campo obrigatório em branco";
        } else {
            user.style.borderColor = "inherit";
            this.getUserResponses(user.value, user)
        }
        e.preventDefault()
    }

    componentWillMount()
    {
        console.log(this.props.GitApi)
    }

    getUserResponses (nomeuser, user) {
        axios.get('https://api.github.com/users/'+nomeuser+'/repos',{ headers: {
                'Authorization': 'token '+ this.props.GitApi.state
            }
        })
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            document.getElementById('errorss').style.display = "block"
        })
    }

    render() {
        return (
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <span className="error" id="errorss">usuário não autenticado ou não encontrado</span>
                  <CampoBusca id="nome_user" type="text" className="validate" placeholder="Nome de Usúario"/>
                </div>
              </div>
              <button type="submit" className="btn blue-grey darken-4" onClick={this.handleUser}>Enviar</button>
            </form>
        )
    }
}
