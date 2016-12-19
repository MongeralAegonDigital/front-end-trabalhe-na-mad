// Inicia server
module.exports = function (gulp, plugins, config) {
  gulp.task('server', ['sass'],function(){
      plugins.browserSync.init({
          server: {
              baseDir: config.srcPath
          }
      });
      gulp.watch(config.sassSrc, ['sass']);
     gulp.watch([config.srcWatch, config.cssSrcPath]).on('change', plugins.browserSync.reload);
  });
};
