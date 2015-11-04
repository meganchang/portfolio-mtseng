var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');

gulp.task('build-sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('jade2html', function() {
	gulp.src('views/**/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('./dist/html/'));
})

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['build-sass']);
});
