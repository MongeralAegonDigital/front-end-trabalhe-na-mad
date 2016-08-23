"use strict";

var React    = require('react');
var Profile  = require('./profile.jsx');
var Loading  = require('./loading.jsx');
var Empty    = require('./empty.jsx');
var $        = require("jquery");



var App = React.createClass({

  	getInitialState: function() {
    	return { paramBusca: '' , dados : '' , status : false, empty : false };
  	},

  	atualizarParametro : function( e ){
  		this.setState({ paramBusca: e.target.value });
  	},

  	realizarBusca : function(e){
  		e.preventDefault();
  		this.setState({ dados : '' })
  		var _param = this.state.paramBusca.trim();	
  		this.componentDidMount( _param );
  	},

	componentDidMount: function( userLogin ) {

		if( userLogin !== "" && userLogin !== undefined ) {
			var _REQ = { url : "https://api.github.com/users/" };

			this.setState({ status : true })
			this.setState({  empty : false })
		    this.serverRequest = $.ajax({ url : _REQ.url += userLogin }).then( this.sucesso, this.erro );
		}
 	},

    sucesso: function( data ){
		this.setState({ status : false })
		this.setState({ dados: data })
		console.log( data )
    },

    erro: function( err , xhr ){
  		this.setState({ status : false });
   		this.setState({ empty  : true });
    },

    render : function() {

        return (
        	<div className="content limit">

				<form action="" className="search">
					<input name="q" type="search" value={ this.state.paramBusca } onChange={ this.atualizarParametro } className="search__input" placeholder="Digite o login ex: paulirish" />
					<button onClick={ this.realizarBusca } className="btn search__button" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
				</form>
				{ this.state.status ? (<Loading></Loading>) : null }
				{ this.state.empty  ? (<Empty></Empty>) : null }
				{ this.state.dados === "" || this.state.dados === undefined ? "" : <Profile obj={ this.state.dados }></Profile> }

			</div>
        );
    }

});

module.exports = App;

