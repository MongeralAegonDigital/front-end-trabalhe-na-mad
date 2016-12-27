<resultado-usuario>
  <div class="resultado-usuario">
    <ul show={opts.data.length != 0}>
      <li><img src={opts.data.avatar_url} alt=""></li>
      <li><span>Nome de usuário:</span> {opts.data.login}</li>
      <li><span>Seguidores:</span> {opts.data.followers}</li>
      <li><span>Seguindo:</span> {opts.data.following}</li>
      <li><span>Quantidade de repositorios:</span> {opts.data.public_repos}</li>
      <li><a href={opts.data.html_url} target="_blank">Visitar perfil</a></li>
    </ul>
  </div>

</resultado-usuario>
