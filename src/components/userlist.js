import React from 'react';
import Generic from './model';
import { hashHistory } from '../app'
import { HOST } from '../config'
import delay from 'lodash/delay';
import { connect } from 'react-redux'
import { add } from '../actions/user'
import SearchBox from './searchbox';
import Home from './home';

class UserList extends Generic {
    constructor(props, context) {
        super(props);

        this.navigate = this.navigate.bind(this);
    };

    componentDidMount() {
        this.fetchData();
    };

    fetchData() {
        var urlGithub = 'https://api.github.com/';
        var params = this.props.location.search;

        fetch(`${urlGithub}search/users${params}`)
        .then((response) => response.json())
        .then((response) => this.props.add(response.items))
        .catch((error) => console.error(error))
    };

    navigate(e) {
        var user = e.currentTarget.getAttribute('data-userlogin');
        this.context.router.push(`/user/${user}`);
    };

    renderItems() {
        return this.props.data.map((user, i) => {
            return (
                <li key={i} data-userlogin={usrer.login} onClick={this.navigate}>
                    <img src={user.avatar_url} className="avatar" />
                    <h3>{user.login}</h3>
               </li>
            )
        })
    };

    render() {
        return (
            <Home>
                <ul className="result-container">
                    <p>Mostrando resultados para "{this.props.location.query.q}"</p>
                    {this.renderItems()}
                </ul>
            </Home>
        )
    }
};


export default connect(
  state => ({ data: state.user.data }),
  { add }
)(UserList)