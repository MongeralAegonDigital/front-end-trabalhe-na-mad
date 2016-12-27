<github-search>
  <formulario-busca data={valorResultadoBusca}></formulario-busca>
  <resultado-usuario data={informacaoUsuario}></resultado-usuario>

  <script>

  var self = this;
  self.informacaoUsuario = [];

  self.buscarUsuario = function(nome){
    $.get('//api.github.com/users/' + nome).done(function(response){
      self.informacaoUsuario = response;
      self.update();
    });
  }
  </script>
</github-search>
