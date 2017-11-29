//CALL MODULES
var gulp = require('gulp');
var cssmin = require("gulp-cssmin");
var rename = require('gulp-rename');
var sass = require("gulp-sass");

//CREATE TASK
gulp.task('roll-compressor', function(){
    //GO IN PATH dev/asserts AND CALL ALL .css FILES 
    //gulp.src('dev/asserts/**/*.css');
    gulp.src('dev/asserts/css/style.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('prod/asserts/css'))
});

//HERE WE ARE CREATE A WACTH TO LISTENER FILE style.css
//IN ALL TIME THAT FILE style.css IS MODIFIED THIS TASK
//RUN AUTOMATIC
gulp.task('listener', function(){
    gulp.watch('dev/asserts/css/style.css',['roll-compressor'])
})

gulp.task('sass', function(){
    //HERE WE ARE DEFINED WHERE IS DE MAIN FILE IN SASS
    //THSI FILE RECEIVE ALL @imports WITH OTHERS FILES OF SASS
    //EXAMPLE _first,_body, .....
    return gulp.src('dev/asserts/style.scss')
        .pipe(sass().on('error', sass.logError))

        //THIS IS THE RESULT, OF CSS FILE
        //IN THIS PATH ARE CREATED THE .css FILE WITH
        //.css FILE GENERATE STARTING styele.css
        .pipe(gulp.dest('dev/asserts/css'));
})

//CREATE A NEW WATCH
gulp.task('production', function(){
    gulp.watch('dev/asserts/sass/*.scss', ['sass']);
    gulp.watch('dev/asserts/css/style.css', ['roll-compressor'])
})

