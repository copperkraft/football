/**
 * Created by Владимир on 23.05.2017.
 */
let gulp = require('gulp');
let less = require('gulp-less');
let concat = require('gulp-concat');
let webserver = require('gulp-webserver');

gulp.task('hello', function() {
    console.log('Hello Zell');
});

gulp.task('less', function(){
    return gulp.src('src/imports.less')
        .pipe(less()) // Converts LESS to CSS with gulp-less
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./'))
});



gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            open: true,
            fallback: './index.html'
        }));
});