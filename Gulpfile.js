var gulp = require('gulp');
var sass = require('gulp-sass');

//Converter de scss para css
gulp.task('styles', function() {
    gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

//Watch
gulp.task('default',function() {
    gulp.watch('scss/**/*.scss',['styles']);
});