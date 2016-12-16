//mods
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass 		= require('gulp-sass');
//var uglify 		= require('gulp-uglify');
var watch 		= require('gulp-watch');


	gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
	});


	gulp.task('browserSync', function(){
		browserSync.init({
		files: [
            "./css/**",
            "./js/**",
            "*.html",
        ],
        server: {
            baseDir: './',
            index: './index.html'
        }
    	});
	});

	gulp.task('watch', ['browserSync'], function(){
		 gulp.watch('*.html');
		 gulp.watch('./sass/*.scss', ['sass']);
		 //gulp.watch('./css/*.css');
		 gulp.watch('./js/*.js');
	});