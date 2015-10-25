var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build-sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['build-sass']);
});