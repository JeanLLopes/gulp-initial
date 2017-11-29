//CALL MODULES
var gulp = require('gulp');
var cssmin = require("gulp-cssmin");
var rename = require('gulp-rename');

//CREATE TASK
gulp.task('roll-compressor', function(){
    //GO IN PATH dev/asserts AND CALL ALL .css FILES 
    //gulp.src('dev/asserts/**/*.css');
    gulp.src('dev/asserts/css/style.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('prod/asserts/css'))
});

