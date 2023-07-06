import gulp from 'gulp';
const { src, dest } = gulp;
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import autoPrefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';

const scss = () => {
  return src('./src/**.scss')
    .pipe(sass())
    .pipe(autoPrefixer({
      overrideBrowserslist: ['last 2 versions']
    }))
    .pipe(csso({ comments: false }))
    .pipe(dest('./public'));
};

export default scss;