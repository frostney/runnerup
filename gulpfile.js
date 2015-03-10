var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var webpack = require('gulp-webpack');
var wrapCommonjs = require('gulp-wrap-commonjs');
var del = require('del');
var consolidate = require('gulp-consolidate');

var paths = {
  source: {
    
  },
  build: {
    debug: 'build/debug',
    release: 'build/release'
  }
};

gulp.task('clean', function() {
  return del('build');
});

var scripts = function() {
  return gulp.src('src/app.js')
    //.pipe(sourcemaps.init())
    //.pipe(babel())
    //.pipe(wrapCommonjs())
    .pipe(webpack(require('./webpack.config.js')))
    //.pipe(concat('all.js'))
    //.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.build.debug));
};

var template = function() {
  return gulp.src('templates/index.html')
    .pipe(consolidate('handlebars'))
    .pipe(gulp.dest(paths.build.debug));
};

gulp.task('scripts', scripts);

gulp.task('template', template);

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['scripts']);
  gulp.watch('templates/*.html', ['template']);
});

gulp.task('default', ['clean'], scripts, template);