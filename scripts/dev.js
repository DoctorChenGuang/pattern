const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
// const nodemon = require('gulp-nodemon');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('dev', () => {
  return gulp.src('./src/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest('./example/'));
});
