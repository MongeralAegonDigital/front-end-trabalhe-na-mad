/**
 * Importando o React JS Module
 * 
 * @type 	{Module}
 */
import React from 'react';


/**
 * Importando o SearchUserComponent
 *  
 * Esse componente é responsável por renderizar toda a aplicação 
 *  
 * @type       {Module}
 */
import SearchUserComponent from './SearchUserComponent';

/**
 * Importando o DataUserComponent
 *  
 * Esse componente é responsável por renderizar as informações do usuário 
 *  
 * @type       {Module}
 */
import DataUserComponent from './DataUserComponent';


/**
 * class MainComponent
 *
 * Classe responsável por criar o componente MainComponent que é o principal da aplicação
 * onde será renderizado todos os outros componentes
 */
class MainComponent extends React.Component{

	/**
	 * Construtor da classe
	 * Atribui duas propriedades ao objeto state (user e repositories)
	 * @param  props 
	 * 
	 */
	constructor(props){
		super(props);

		this.state = {
			user : null ,
			repositories : []
		}
	}


	/**
	 * Método responsável por atualizar os dados do usuário dentro do componente
	 * 
	 * @param  user
	 * 
	 */
	updateDataUser(user){
		this.setState({user : user});
	}


	/**
	 * Método responsável por atualizar os dados dos repositórios dentro do componente
	 * 
	 * @param  repositories
	 * 
	 */
	updateDataRepositories(repositories){
		this.setState({repositories : repositories});
	}


	/**
	 * Método responsável por renderizar na tela o conteúdo do componente
	 * 
	 * @return {elementDOM}
	 */
	render(){

		return(
			<main className="wrapper">
				
				<SearchUserComponent updateDataUser={this.updateDataUser.bind(this)} updateDataRepositories={this.updateDataRepositories.bind(this)}/>				
			
				{(this.state.user != null) ? <DataUserComponent user={this.state.user} repositories={this.state.repositories} /> : ''}
				
			</main>
		)
	}
}

/**
 * Exporta o componente para que possa ser utilizado em conjunto com outros componentes
 * e/ou possa ser renderizado
 */
export default MainComponent;