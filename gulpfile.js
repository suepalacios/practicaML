/*
* Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  stylus = require('gulp-stylus'),
  minifyCSS = require('gulp-minify-css');;

/*
* Tarea ejemplo JS
*/
gulp.task('MinificacionJS', function () {
  gulp.src('dist/ui/*.js')
  .pipe(concat('misjs.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/ui/'))
});
/*
* Tarea ejemplo CSS
*/
gulp.task('MinificacionCSS', function() {
    gulp.src('dist/ui/*.css')
		.pipe(concat('miscss.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/ui/'))
});

var minifyHTML = require('gulp-minify-html');

gulp.task('MinificacionHTML', function() {
   var htmlSrc = 'index.html',
   htmlDst = 'views/';
   var opts = {empty: true};

   gulp.src(htmlSrc)
	  .pipe(concat('miindex.min.html'))
      .pipe(minifyHTML(opts))
      .pipe(gulp.dest(htmlDst));
});