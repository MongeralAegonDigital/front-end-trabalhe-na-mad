/**
 * Importando o React JS Module
 * 
 * @type 	{Module}
 */
import React from 'react';


/**
 * Importando o FormComponent
 *  
 * Esse componente é responsável por exibir o formulário que submete a busca
 * de usuários do GitHub 
 *  
 * @type       {Module}
 */
import FormComponent from './FormComponent';


/**
 * class SearchUserComponent
 *
 * Classe responsável por criar o componente SearchUserComponent que é o container
 * da busca por usuários pela API do GitHub
 */
class SearchUserComponent extends React.Component{

	render(){
		return(
			<div className="container-form">
				<h2 className="title">Buscar Usuário GitHub</h2>
				<FormComponent updateDataUser={this.props.updateDataUser} updateDataRepositories={this.props.updateDataRepositories}/>
			</div>
		)
	}
}

/**
 * Exporta o componente para que possa ser utilizado em conjunto com outros componentes
 * e/ou possa ser renderizado
 */
export default SearchUserComponent;