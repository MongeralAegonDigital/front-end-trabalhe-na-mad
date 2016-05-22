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
// "deploy" gh-pages in github
var deploy = require('gulp-gh-pages');

gulp.task('browserSync',function(){
    browserSync.init({
      server:{
        baseDir: ["./","./src"],
        index: "src/index.html"
      }
    });
})

// Converts Sass to CSS with gulp-sass
gulp.task('sass', function(){
  return gulp.src('src/assets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/assets/css'))
    .pipe(browserSync.reload({stream: true}))
});

// concat files and minify
gulp.task('useref', function(){
  return gulp.src('src/index.html')
    .pipe(useref({searchPath: ['dist', 'src', './']}))
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', minifyCss()))
    .pipe(gulp.dest('dist'))
});


// font generator
gulp.task('fontgen',function() {
  return gulp.src('src/assets/fonts/*.{ttf,otf}')
    .pipe(fontgen({
        dest: 'src/assets/fonts'
    }));
});

// Gulp watch syntax
////browserSync
////sass
gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('src/assets/scss/imports/*.scss',['sass']);
  gulp.watch('src/assets/scss/*.scss',['sass']);
});

// Minify Task
gulp.task('build', ['useref','fontgen'], function(){
  gulp.src(['src/favicon.ico', 'src/logo.svg']).pipe(gulp.dest('dist'));
  gulp.src('src/assets/fonts/*').pipe(gulp.dest('dist/assets/fonts'));
});

// Deploy to Git Pages
gulp.task('deploy', function () {
    return gulp.src('./dist/**/*')
    .pipe(deploy());
});
