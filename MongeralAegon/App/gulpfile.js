'use strict';

var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var del         = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');

var paths = {
   html: '*.html',
   sass: ['assets/sass/*.scss', '!assets/sass/reset.scss' ],
 styles: 'assets/css/*.css',
 script: 'assets/js/main.js',
    jsx: 'assets/js/components/*.jsx'
};

// Del
gulp.task('clean', function(cb) {
  del(['public/assets/css', 'public/assets/js', 'public/*.html'], cb);
});

// Sass
gulp.task('sass', function () {
  return gulp.src(paths.sass)
    .pipe($.sass().on('error', $.sass.logError))
    .pipe(gulp.dest('assets/css/'))
});

// Css
gulp.task('styles',  function() {
  return gulp.src(paths.styles)
    .pipe($.cssnano())
    .pipe($.concat('main.css'))
    .pipe(gulp.dest('public/assets/css'))
    .pipe(browserSync.stream());
});

//Modules, Compile and Minify 
gulp.task('browserify', function(){
  var bundler = browserify(paths.script);
  return bundler
    .transform(babelify,{presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('bundle.js'))
    //.pipe($.uglify())
    .pipe(gulp.dest('./public/assets/js'))
    .pipe(browserSync.stream());
});

// Html
gulp.task('html',  function() {
  return gulp.src(paths.html)
    .pipe($.htmlmin({ 
      collapseWhitespace: true,
      preventAttributesEscaping : true,
      removeComments : true
     }))
    .pipe(gulp.dest('public/'))
    .pipe(browserSync.stream());
});

// Reloading Browser
gulp.task('browser-sync', ['styles','html','browserify'], function() {
  browserSync.init({
      server: {
        baseDir: "./public/" 
      }
  });
});

// Watch
gulp.task('watch', function() {
  gulp.watch(paths.sass,    ['sass','styles']);
  gulp.watch(paths.styles,  ['styles']);
  gulp.watch(paths.html,    ['html']);
  gulp.watch([paths.script , paths.jsx],  ['browserify']);
});

// Default 
gulp.task('default', ['clean'], function(cb){
  runSequence(['browser-sync','watch','sass','html','styles','browserify'], cb);
}); 