var gulp = require('gulp');
// Live-reloading with Browser Sync
var browserSync = require('browser-sync').create();
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
//require useref
var useref = require('gulp-useref');
// minify
var uglify = require('gulp-uglify');
// gulp-if
var gulpIf = require('gulp-if');
// minify Css files
var minifyCss = require('gulp-minify-css');
// fontgenerator
var fontgen = require('gulp-fontgen');


gulp.task('browserSync',function(){
    browserSync.init({
      server:{
        baseDir: ["./","./src/views"],
        index: "src/views/index.html"
      }
    });
})

// Converts Sass to CSS with gulp-sass
gulp.task('sass', function(){
  return gulp.src('src/app/assets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/app/assets/css'))
    .pipe(browserSync.reload({stream: true}))
});

// concat files and minify
gulp.task('useref', function(){
  return gulp.src('src/views/index.html')
    .pipe(useref({searchPath: ['build', 'src', './']}))
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', minifyCss()))
    .pipe(gulp.dest('build/views'))
});


// font generator
gulp.task('fontgen',function() {
  return gulp.src('src/app/assets/fonts/*.{ttf,otf}')
    .pipe(fontgen({
        dest: 'src/app/assets/fonts'
    }));
});

// Gulp watch syntax
////browserSync
////sass
gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('src/app/assets/scss/imports/*.scss',['sass']);
  gulp.watch('src/app/assets/scss/*.scss',['sass']);
});

// Minify Task
gulp.task('build', ['useref','fontgen']);
