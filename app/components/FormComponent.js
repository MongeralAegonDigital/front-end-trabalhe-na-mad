/**
 * Importando o React JS Module
 * 
 * @type 	{Module}
 */
import React from 'react';


/**
 * Importando o DataUserComponent
 *  
 * Esse módulo é responsável por fazer as requisições via ajax
 *  
 * @type       {Module}
 */
import Ajax from '../modules/Ajax';


/**
 * class FormComponent
 *
 * Classe responsável por criar o componente FormComponent que renderiza o
 * formulário de busca por usuário
 */
class FormComponent extends React.Component{


	/**
	 * Construtor da classe
	 *
	 * @param  props 
	 * 
	 */
	constructor(props){
		super(props);
	}


	/**
	 * Método manipulador do evento submit que é responsável por receber o nome do usuário
	 * e executar os métodos do módulo Ajax 
	 * 
	 * @param  event 
	 */
	handleSubmit(event){
		event.preventDefault();

		Ajax.getUser(this.refs.username.value).then((response) => {
			this.props.updateDataUser(response.data);
		});

		Ajax.getRepositories(this.refs.username.value).then((response) => {
			this.props.updateDataRepositories(response.data);

		});
	}

	/**
	 * Método responsável por renderizar na tela o conteúdo do componente
	 * 
	 * @return {elementDOM}
	 */
	render(){
		return(
			<form className="form-search" onSubmit={this.handleSubmit.bind(this)}>
				<div>
					<label className="label">Nome:</label>
					<input type="text" className="input-name" placeholder="Ex: henriqueViana" ref="username" value="henriqueViana"/>
				</div>

				<button type="submit" className="submit">Buscar</button> 
			</form>
		)
	}
}

/**
 * Exporta o componente para que possa ser utilizado em conjunto com outros componentes
 * e/ou possa ser renderizado
 */
export default FormComponent;