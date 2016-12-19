// Inicia server
module.exports = function (gulp, plugins, config) {
  gulp.task('sass', function(){
      return gulp.src(config.sassSrc)
                 .pipe(plugins.sass({outputStyle: 'expanded'})
                              .on('error', plugins.sass.logError))
                 .pipe(gulp.dest(config.sassDist))
                 .pipe(plugins.browserSync.stream());
  });
};
