/**
 * Importando o React JS Module
 * 
 * @type 	{Module}
 */
import React from 'react';


/**
 * class DataRepositoriesComponent
 *
 * Classe responsável por criar o componente DataRepositoriesComponent que renderiza
 * os boxes com as informações dos repositórios
 */
class DataRepositoriesComponent extends React.Component{

	/**
	 * Construtor da classe
	 * Atribui uma propriedade ao objeto state (count)
	 * @param  props 
	 * 
	 */
	constructor(props){
		super(props);

		this.state = {
			count : 0
		}
	}


	/**
	 * Método que seta a propriedade count do state com o valor do tamanho do array de repositórios
	 * 
	 * @param  props
	 * 
	 */
	componentWillReceiveProps(props){
		this.setState({
			count : this.props.repositories.length
		});
	}


	/**
	 * Método responsável por renderizar na tela o conteúdo do componente
	 * 
	 * @return {elementDOM}
	 */
	render(){

		const result = this.props.repositories.map((repository , key) => {
			
			return(
				<div key={key} className='repository'>
					<div>
						<p className="name">
							{repository.name}
						</p>
						<p className="stars">
							{repository.stargazers_count} stars
						</p>
						<p>{repository.description}</p>
						<p>
							<a href={repository.html_url} className="button-repository" role="button">Repositório</a>
							<a href={repository.html_url + '/issues'} className="button-issues" role="button">Issues</a>
						</p>
					</div>
				</div>
			)

		});

		return(
			<div>
				{result}
			</div>
		)
		
	}
}

/**
 * Exporta o componente para que possa ser utilizado em conjunto com outros componentes
 * e/ou possa ser renderizado
 */
export default DataRepositoriesComponent;