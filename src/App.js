import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import 'materialize-css/dist/css/materialize.min.css';
import "./styles/main.scss";
import Header        from './components/Header';
import MenuNav       from './components/MenuNav';
import FormPrincipal from './components/FormPrincipal';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MenuNav/>
                <Provider store={store}>
                    <FormPrincipal/>
                </Provider>
            </div>
        )
    }
}

export default App;
