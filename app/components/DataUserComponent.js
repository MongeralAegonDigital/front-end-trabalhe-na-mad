/**
 * Importando o React JS Module
 * 
 * @type 	{Module}
 */
import React from 'react';


/**
 * Importando o DataRepositoriesComponent
 *  
 * Esse componente é responsável por renderizar os repositórios do usuário 
 *  
 * @type       {Module}
 */
import DataRepositoriesComponent from './DataRepositoriesComponent';


/**
 * class DataUserComponent
 *
 * Classe responsável por criar o componente DataUserComponent que renderiza
 * as informações do usuário
 */
class DataUserComponent extends React.Component{

	/**
	 * Método responsável por renderizar na tela o conteúdo do componente
	 * 
	 * @return {elementDOM}
	 */
	render(){
		const user = this.props.user;

		return(
			<div className="container-data">
				<div className="container-data-user">
					<img src={user.avatar_url} className="photo" alt="Foto do usuário" />
					<h2 className="username">
						{user.login}
					</h2>
					<p className="name">
						{user.name}
					</p>
					<p className="show-profile">
						<a href={user.html_url} role="button">Ver perfil no GitHub</a>
					</p>
				</div>

				<div>
					<DataRepositoriesComponent repositories={this.props.repositories}/>
				</div>
			</div>
		)
	}
} 

/**
 * Exporta o componente para que possa ser utilizado em conjunto com outros componentes
 * e/ou possa ser renderizado
 */
export default DataUserComponent; 