import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import "./styles/main.scss"
import Header from './components/Header'
import MenuNav from './components/MenuNav'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MenuNav/>
            </div>
        )
    }
}

export default App;
