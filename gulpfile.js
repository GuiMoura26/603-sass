const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');


gulp.task('compilar-scripts', function(){
    return gulp.src('js/*.js') //endereço dos scripts
    .pipe(concat('script.js')) //juntar todos os scripts
    .pipe(uglify()) //Minificar o JavaScript
    .pipe(gulp.dest('minify'))
} )

gulp.task('compilar-styles', function(){
    return gulp.src('static/*.scss') //endereço dos scripts
    .pipe(concat('style.css')) //juntar todos os scripts
    .pipe(gulp.dest('styles'))
    
} )