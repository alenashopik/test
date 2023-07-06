import gulp from 'gulp';
const { src, dest } = gulp;
import fileInclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';

const html = () => {
  return src('./src/**.html')
    .pipe(fileInclude())
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(dest('./public'));
};

export default html;