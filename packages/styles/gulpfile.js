const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

sass.compiler = require('node-sass');

const compile =  () => gulp.src(['./scss/**/*.scss']).pipe(sass().on('error', sass.logError)).pipe(gulp.dest('css'))
const clean =  () => del(['css'])

module.exports.default = compile;
module.exports.compile = compile;
module.exports.clean = clean;