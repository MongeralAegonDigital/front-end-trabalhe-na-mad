/**
 * Importando o React JS Module
 * 
 * @type 	{Module}
 */
import React from 'react';


/**
 * Importando o SearchUserComponent
 *  
 * Esse componente é responsável por exibir toda a aplicação 
 *  
 * @type       {Module}
 */
import SearchUserComponent from './SearchUserComponent';


/**
 * class MainComponent
 *
 * Classe responsável por criar o componente MainComponent que é o principal da aplicação
 * onde será renderizado todos os outros componentes
 */
class MainComponent extends React.Component{
	render(){
		return(
			<main className="wrapper">
				<section>
					<SearchUserComponent/>				
				</section>
			</main>
		)
	}
}

/**
 * Exporta o componente para que possa ser utilizado em conjunto com outros componentes
 * e/ou possa ser renderizado
 */
export default MainComponent;