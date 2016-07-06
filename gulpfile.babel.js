import gulp from 'gulp';
import sass from 'gulp-sass';
import nano from 'gulp-cssnano';
import autoprefixer from 'gulp-autoprefixer';
import concat from  'gulp-concat';
import htmlmin from 'gulp-htmlmin';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';

gulp.task('sass', () => {
    return gulp.src(['src/sass/app.scss'])
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
            cascade: true
        }))
        .pipe(nano())
        .pipe(gulp.dest('css/'));
});

gulp.task('js', () => {
    return gulp.src('src/js/**/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/'));
});

gulp.task('html', () => {
    return gulp.src('src/js/views/**/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('js/views'))
});

gulp.task('watch-build', () => {
    gulp.watch('src/sass/**/**/*.scss', ['sass']);
    gulp.watch('src/js/**/**/*.js', ['js']);
    gulp.watch('src/js/views/**/**/*.html', ['html']);
});

gulp.task('default', ['sass', 'js', 'html']);
gulp.task('watch', ['default', 'watch-build']);