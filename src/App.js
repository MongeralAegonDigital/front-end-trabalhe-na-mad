import React, { Component } from 'react';
import { Provider }         from 'react-redux';
import Header               from './components/Header';
import MenuNav              from './components/MenuNav';
import BuscaUser            from './components/BuscaUser'
import {Router, Route, browserHistory} from 'react-router'
import store from './store';
import 'materialize-css/dist/css/materialize.min.css';
import "./styles/main.scss";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MenuNav/>
                <Provider store={store}>
                    <Router history={browserHistory}>
                        <Route path="/" component={BuscaUser}/>
                    </Router>
                </Provider>
            </div>
        )
    }
}

export default App;
