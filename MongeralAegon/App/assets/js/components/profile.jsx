
"use strict";
var React = require('react');


var Profile = React.createClass({

    render : function() {

        return (
            <div className="profile">  
            	<div className="profile__column">
            		<img className="profile__image" src={this.props.obj['avatar_url']} alt={ this.props.obj['name']} width="230"  />  
            	</div> 
            	<div className="profile__column v-top">           
	                <h1 className="profile__name h1"> {this.props.obj['name']}</h1> 
	                <h5 className="profile__login">
	                	<strong className="strong">{ this.props.obj['login'] }</strong>
	                </h5> 
	                <address className="profile__email">
	                	{ this.props.obj['email'] !== null && this.props.obj['email'] !== "" ? <i className="fa fa-envelope-o padding-rigth-8" aria-hidden="true"></i> : null }
	                	{ this.props.obj['email'] }
	                </address>
	                <small className="profile__location">
	                	{ this.props.obj['location'] !== null &&  this.props.obj['location'] !== "" ? <i className="fa fa-map-marker padding-rigth-8" aria-hidden="true"></i> : null }
	                	{ this.props.obj['location'] }
	                </small> 
	            </div> 
            </div>
        );
    }
});

module.exports = Profile;


