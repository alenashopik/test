import gulp from 'gulp';
const { src, dest } = gulp;
import minify from 'gulp-minify';

const js = () => {
  return src('./src/js/**')
    .pipe(minify({
      ext: { min: '.js' },
      noSource: true
    }))
    .pipe(dest('./public/js'));
};

export default js;