// Build projeto
module.exports = function (gulp, plugins, config) {
  gulp.task('build', ['buildFavico'], function() {
    gulp.start('buildImg', 'buildFont', 'buildCode');
  });
};
