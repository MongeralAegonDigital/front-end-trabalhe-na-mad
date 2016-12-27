riot.tag2('formulario-busca', '<h1>Pesquise um usuário</h1><form><div class="form-inline"><input type="text" placeholder="Busque o usuário" class="form-control" id="valorBusca"><button class="btn btn-primary" onclick="{onClick}">Buscar</button></div></form>', '', '', function(opts) {
    var self = this;

    self.onClick = function(e){
      e.preventDefault();
      self.parent.buscarUsuario(self.valorBusca.value);

    }

    self.on('mount',function(){
      self.valorBusca = document.getElementById('valorBusca');
    })
});

riot.tag2('github-search', '<formulario-busca data="{valorResultadoBusca}"></formulario-busca><resultado-usuario data="{informacaoUsuario}"></resultado-usuario>', '', '', function(opts) {

  var self = this;
  self.informacaoUsuario = [];

  self.buscarUsuario = function(nome){
    $.get('//api.github.com/users/' + nome).done(function(response){
      self.informacaoUsuario = response;
      self.update();
    });
  }

});

riot.tag2('resultado-repositorios', '<div class="red"><ul each="{opts.data.repositorios}"><li>{repositoriosname}</li><li>teste</li></ul></div>', '', '', function(opts) {
});

riot.tag2('resultado-usuario', '<div class="resultado-usuario"><ul show="{opts.data.length != 0}"><li><img riot-src="{opts.data.avatar_url}" alt=""></li><li><span>Nome de usuário:</span> {opts.data.login}</li><li><span>Seguidores:</span> {opts.data.followers}</li><li><span>Seguindo:</span> {opts.data.following}</li><li><span>Quantidade de repositorios:</span> {opts.data.public_repos}</li><li><a href="{opts.data.html_url}" target="_blank">Visitar perfil</a></li></ul></div>', '', '', function(opts) {
});

