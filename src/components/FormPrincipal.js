import React, { Component }  from 'react'
import CampoBusca from'./CampoBusca'

class FormPrincipal extends Component {

    render() {
        return (
            <div className="container">
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s12">
                      <CampoBusca id="nome_user" type="text" className="validate"/>
                      <label htmlFor="nome_user">Nome do usuário</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <CampoBusca id="email_user" type="email" className="validate"/>
                      <label htmlFor="email_user">Email do usuário</label>
                    </div>
                  </div>
                  <button type="submit" className="btn blue-grey darken-4">Enviar</button>
                </form>
              </div>
          </div>
        )
    }
}

export default FormPrincipal;
