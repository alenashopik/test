import gulp from 'gulp';
const { src, dest } = gulp;

const server = () => {
  return src('./server/**')
    .pipe(dest('./public/server'));
};

export default server;