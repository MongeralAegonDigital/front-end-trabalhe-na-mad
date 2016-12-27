<formulario-busca>
  <h1>Pesquise um usuário</h1>
  <form>
    <div class="form-inline">
      <input type="text" placeholder="Busque o usuário" class="form-control" id="valorBusca">
      <button class="btn btn-primary" onclick={onClick}>Buscar</button>
    </div>
  </form> <!--fim do form -->


  <script>
    var self = this;

    self.onClick = function(e){
      e.preventDefault();
      self.parent.buscarUsuario(self.valorBusca.value);
    }

    self.on('mount',function(){
      self.valorBusca = document.getElementById('valorBusca');
    })
  </script>
</formulario-busca>
