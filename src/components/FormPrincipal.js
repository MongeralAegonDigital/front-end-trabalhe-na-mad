import React, { Component }  from 'react'
import BuscaUser  from './BuscaUser'
import {formPrincipalAuth, formPrincipalToken} from '../actions/FormPrincipalActions'

import {connect}    from 'react-redux'
@connect((store) => {
    return {
        GitApi: store.GitApi.GitApi,
        GitApiFetched: store.GitApi.fetched
    }
})
export default class FormPrincipal extends Component {
    constructor() {
        super();
        this.state = {
            code: '',
            FormUser: false
        }

        this.logar = this.logar.bind(this);
        this.token = this.token.bind(this);
    }

    componentWillMount() {

        var getQueryString = function ( field, url ) {
            var href = url ? url : window.location.href;
            var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
            var string = reg.exec(href);
            return string ? string[1] : null;
        };

        var thisCode = getQueryString('code');
        this.setState({code: thisCode})
        if(thisCode != null) {
            this.token();
            this.setState({
                FormUser: true
            })
        }
    }

    token() {
        this.props.dispatch(formPrincipalToken(this.state.code))
    }

    logar() {
        this.props.dispatch(formPrincipalAuth())
        console.log(this.props)
    }

    render() {
        return (
            <div className="container">
            <button onClick={this.logar} className="btn-github">logar com github</button>
              <div className="row">
                 {this.state.FormUser && <BuscaUser/>}
              </div>
          </div>
        )
    }
}
