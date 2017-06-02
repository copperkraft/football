/**
 * Created by Владимир on 23.05.2017.
 */
var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('hello', function() {
    console.log('Hello Zell');
});

gulp.task('less', function(){
    return gulp.src('src/imports.less')
        .pipe(less()) // Converts LESS to CSS with gulp-less
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./'))
});