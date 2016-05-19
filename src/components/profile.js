import React, { Component } from 'react';

export default class Profile extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }

  render() {
    if(!this.props.data) {
      return (
        <section className="profile">
          <div className="error">
            <p>Carregando ...</p>
          </div>
        </section>
      )
    }

    let data = this.props.data;
    let followers = `${data.homeUrl}/followers`;
    let repositories = `${data.homeUrl}?tab=repositories`;
    let following = `${data.homeUrl}/following`;

    if (data.message === 'Not Found') {
      return (
        <section className="profile">
          <div className="error">
            <h2>Usuário não encontrado</h2>
            <p>Não foi encontrado um usuário para esse username.</p>
          </div>
        </section>
      );
    } else {
      return (
        <section className="profile">
          <div className="information">
            <a href={data.homeUrl} target="_blank" title={data.name || data.username}>
              <img src={data.avatar_url} alt={data.username}/>
              <h2>
                {data.name || data.username}
              </h2>
              <h3>{data.location || 'Sem localização'}</h3>
            </a>
          </div>
          <hr/>
          <ul className="details">
             <li>
                <a href={followers} target="_blank" title="Seguidores">
                  <p>{data.followers}</p>
                  <p>Seguidores</p>
                </a>
             </li>
             <li>
                <a href={repositories} target="_blank" title="Repositorios">
                  <p>{data.public_repos}</p>
                  <p>Repositorios</p>
                </a>
             </li>
             <li>
                <a href={following} target="_blank" title="Seguindo">
                  <p>{data.following}</p>
                  <p>Seguindo</p>
                </a>
             </li>
          </ul>
        </section>
      );
    }
  }
}
