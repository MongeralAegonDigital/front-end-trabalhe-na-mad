"use strict";

var React = require('react');
var $     = require("jquery");

var Empty = React.createClass({

    render : function() {

        return (
            <div className="empty">                
                <i className="fa fa-3x fa-meh-o" aria-hidden="true"></i><br />
				<span className="empty__user">Nenhum usuário encontrado.</span>
            </div>
        );
    }

});

module.exports = Empty;

