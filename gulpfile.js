/* jshint strict: true, node: true */

'use strict';

var gulp = require('gulp');
var del = require('del');
var eslint = require('gulp-eslint');
var gutil = require('gulp-util');
var webpack = require('webpack-stream');
var webserver = require('gulp-webserver');
var webpackConfig = require('./webpack.config');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  src: __dirname + '/src',
  dist: __dirname + '/dist',
};

gulp.task('clean', function() {
  return del([paths.dist]);
});

gulp.task('lint', function() {
  return gulp.src([paths.src + '/base/scripts/**/*'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('webpack', function() {
  return gulp.src(paths.src + '/index.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('webserver', function() {
  return gulp.src('./')
    .pipe(webserver({
        livereload: true,
        directoryListing: true,
        port: 3000,
        open: true,
        path: '/',
        fallback: './index.html'
      }));
});

gulp.task('build', ['clean', 'webpack']);

gulp.task('watch', function() {
  gulp.watch(['src/**/*'], ['webpack']);
});

gulp.task('serve', ['build', 'webserver', 'watch']);

gulp.task('default', ['serve']);
