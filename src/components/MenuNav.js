  import React, { Component } from 'react';

  class MenuNav extends Component {
      render() {
          return (
              <nav className="blue-grey darken-4">
                <ul>
                    <li><a href="#">Repositórios</a></li>
                    <li><a href="#">Issues</a></li>
                </ul>
              </nav>
          )
      }
  }

  export default MenuNav;
