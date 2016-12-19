// Limpa o diretorio dist
module.exports = function (gulp, plugins, config) {
  gulp.task("clean", function(){
      return gulp.src(config.srcDist)
                 .pipe(plugins.clean());
  });
};
