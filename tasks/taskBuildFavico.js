// Inicia diretorio raiz e copia favicons
module.exports = function (gulp, plugins, config) {
  gulp.task("buildFavico", ["clean"], function(){
      return gulp.src(config.favIcoSrcPath)
                 .pipe(gulp.dest(config.favIcoSrcDist));
  });
};
