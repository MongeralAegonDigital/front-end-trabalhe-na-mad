/**
 * Importando o React JS Module
 * 
 * @type 	{Module}
 */
import React from 'react';

class FormComponent extends React.Component{

	handleSubmit(event){
		event.preventDefault();
	}

	render(){
		return(
			<form className="form-search" onSubmit={this.handleSubmit}>
				<div>
					<label>Nome:</label>
					<input type="text" className="input-name" placeholder="Ex: henriqueViana" ref="username"/>
				</div>

				<input type="submit" className="submit" value="Buscar" />
			</form>
		)
	}
}

/**
 * Exporta o componente para que possa ser utilizado em conjunto com outros componentes
 * e/ou possa ser renderizado
 */
export default FormComponent;