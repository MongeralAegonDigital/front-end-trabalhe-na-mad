import React from 'react';
import { Collection } from './model';
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { add } from '../actions/user'
import Home from './home';
import Loading from './loading'

class UserList extends Collection {
    urlRoot() {
        var params = this.props.location.search;

        return `search/users${params}`
    };

    renderItems() {
        return this.props.data.map((user, i) => {
            return (
                <li key={i}>
                    <Link to={`/user/${user.login}`}>
                        <img src={user.avatar_url} className="avatar" />
                        <div className="informations">
                            <h3>{user.login}</h3>
                            <p>ID: {user.id}</p>
                        </div>
                    </Link>
               </li>
            )
        })
    };

    render() {
        if (this.state.loading) {
            return <Loading />
        } else {
            return (
                <Home query={this.props.location.query.q}>
                    <ul className="result-container">
                        {this.renderItems()}
                    </ul>
                </Home>
            )
        }
    }
};


export default connect(
  state => ({ data: state.user.data }),
  { add }
)(UserList)