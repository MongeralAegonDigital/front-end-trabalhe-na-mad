const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

gulp.task('sass', () => {
  return gulp.src('src/sass/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('babel', () => {
  gulp.src('src/js/**/*.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('default', ['babel', 'sass']);

gulp.task('sass:watch', () => { gulp.watch('src/sass/**/*.scss', ['sass']) });

gulp.task('babel:watch', () => { gulp.watch('src/js/**/*.js', ['babel']) });
