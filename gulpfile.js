'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssmin = require('gulp-cssmin');
// var customMedia = require("postcss-custom-media");

var salad = require('postcss-salad')(require('./salad.config.json'));

gulp.task('compile', function() {
  return gulp.src('./src/*.css')
  // .pipe(customMedia())
    .pipe(postcss(salad))
    .pipe(cssmin())
    .pipe(gulp.dest('../x-ui/packages/x-css/lib'));
});

gulp.task('copyfont', function() {
  return gulp.src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('../x-ui/packages/x-css/lib/fonts'));
});


gulp.task('build', ['compile', 'copyfont']);
gulp.task('watch', function () {
  gulp.watch('./src/*.css', ['compile', 'build'])
})
