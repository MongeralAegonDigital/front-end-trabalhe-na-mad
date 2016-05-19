var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');

/* Converter SASS em CSS */
gulp.task('sass', function(){
  return gulp.src('static/sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('static/css'))
});

/* Minifica o CSS */
gulp.task('minify-css', function() {
  return gulp.src('static/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('static/dist/css'));
});

/* Minifica o JS */
gulp.task('minify-js', function() {
  return gulp.src('static/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('static/dist/js'));
});

/* Minifica o HTML */
gulp.task('minify-html', function() {
  return gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('static/dist/html'))
});

/* Verificando arquivos */
gulp.task('watch', function(){
  gulp.watch('static/sass/**/*.scss', ['sass']);
  gulp.watch('static/js/**/*.js', ['minify-js']);
  gulp.watch('./*.html', ['minify-html']);
});