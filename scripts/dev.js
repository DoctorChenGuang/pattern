const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
// const nodemon = require('gulp-nodemon');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

gulp.task('dev', () => {
  // return gulp.src('./src/**/*.ts')
  //   // .pipe(sourcemaps.init())
  //   .pipe(tsProject())
  //   // .pipe(sourcemaps.write("./"))
  //   .pipe(concat('dist.js'))
  //   .pipe(gulp.dest('./example/start/'));
});
