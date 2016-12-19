// Copia e otimiza imagens
module.exports = function (gulp, plugins, config) {
  gulp.task("buildImg", function(){
      return gulp.src(config.imgSrcPath)
                 .pipe(plugins.imagemin())
                 .pipe(gulp.dest(config.imgSrcDist));
  });
};
