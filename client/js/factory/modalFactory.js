myApp.factory('modalFactory', function(){
  var title = 'Pesquise Organizações';
  
  return {
    title: function() { return title; },
    setTitle: function(newTitle) { title = newTitle; }
  };
});
