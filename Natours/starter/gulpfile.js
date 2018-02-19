var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');


//Style Task
gulp.task('styles', function(){
   gulp.src('sass/*.scss')
   .pipe(plumber())
   .pipe(sass())
   .pipe(gulp.dest('css'));
});


//compress Css Task
gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('mincss'))
    .pipe(livereload());
});


//Watch Task
gulp.task('watch', function(){
    gulp.watch('sass/*.scss', ['styles']);
    gulp.watch('css/*.css', ['minify-css']);
});


//Function Default (Executa as funções)
gulp.task('default', ['styles', 'minify-css', 'watch']);
