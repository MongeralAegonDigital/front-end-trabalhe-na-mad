/**
 * app.js
 *
 * Arquivo responsável por definir o container da aplicação e o componente
 * que será renderizado neste container
 */



/**
 * Importando o React JS Module
 * 
 * @type 	{Module}
 */
import React from 'react';


/**
 * Importando o ReactDOM Module
 * 
 * @type 	{Module}
 */
import ReactDOM from 'react-dom';


/**
 * Importando o MainComponent
 *  
 * Esse componente é responsável por exibir toda a aplicação 
 *  
 * @type       {Module}
 */
import MainComponent from './components/MainComponent';


/**
 * @var {element DOM} elemento onde será renderizado a aplicação
 * 
 * @type {element DOM}
 */
const app = document.querySelector('.app');


/**
 * ReactDOM
 *
 * Responsável pela renderização da aplicação
 *
 * @type {Module}
 */
ReactDOM.render(<MainComponent/> , app);