/* Подключенные плагины
del - Удаление файлов/папок.
gulp-file-include - Соединение частей html.
gulp-htmlmin - Минификатор html.
sass - Препроцессор dart-sass, нужен для работы плагина gulp-sass.
gulp-sass - Плагин для обработки scss.
autoPrefixer - Добавляет префиксы в css для улучшения совместимости с браузерами.
gulp-csso - Минификатор scss.
gulp-minify - Минификатор js.
browserSync - Позволяет запустить сервер для запуска готового проекта. */

import gulp from 'gulp';
const { series, watch } = gulp;
import browserSync from 'browser-sync';

// Таски
// Чистит папку сборки проекта
import clean from './tasks/clean.js';
// Собирает html, минифицирует и отправляет в папку public
import html from './tasks/html.js';
// Обрабатывает главный файл scss, минифицирует, 
// убирает комментарии и отправляет в папку public
import scss from './tasks/scss.js';
// Минифицирукт скрипты и отправляет в папку public/js
import js from './tasks/js.js';
// Копирует шрифты в папку public/fonts
import fonts from './tasks/fonts.js';
// Копирует изображения в папку public/images
import images from './tasks/images.js';
// Копирует тестовые файлы сервера в папку public/server
import server from './tasks/server.js';
// Монитор на основные папки для удобства работы
const monitor = () => {
  browserSync.init({
    server: './public'
  });

  watch(['./src/**.html', './src/html-blocks/**.html'], html).on('change', browserSync.reload);
  watch(['./src/**.scss', './src/scss/**.scss'], scss).on('change', browserSync.reload);
  watch(['./src/js/**'], js).on('change', browserSync.reload);
  watch(['./src/fonts/**'], fonts).on('change', browserSync.reload);
  watch(['./src/images/**'], images).on('change', browserSync.reload);
  watch(['./server/**'], images).on('change', browserSync.reload);
};
// Сборка релиза и разработки.
const build = series(clean, html, scss, js, fonts, images, server);
const dev = series(clean, html, scss, js, fonts, images, server, monitor);

export { html, scss, clean, js, fonts, images, server, monitor, build, dev };