var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    return gulp.src('src/styles/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('default', function() {
    gulp.watch('src/styles/**/*.scss', ['styles']);
});