 //основной модуль
 import gulp from "gulp";
 //импорт путей
 import { path } from './gulp/config/path.js';

 //подключение плагина
 import { plugins } from './gulp/config/plugins.js'

 global.app = {
     isBuild: process.argv.includes('--build'),
     isDev: !process.argv.includes('--build'),
     path: path,
     gulp: gulp,
     plugins
 }

 //импорт задач
 import { copy } from './gulp/tasks/copy.js';
 import { reset } from './gulp/tasks/reset.js';
 import { html } from './gulp/tasks/html.js';
 import { server } from './gulp/tasks/server.js';
 import { scss } from './gulp/tasks/scss.js';
 import { js } from './gulp/tasks/js.js';
 import { images } from './gulp/tasks/images.js';
 import { otfToTtf, ttfToWoff, fonstStyle } from './gulp/tasks/fonts.js';
 import { svgSprive } from './gulp/tasks/svgSprite.js';
 import { zip } from './gulp/tasks/zip.js';
 //наблюдаем за изменениями в файлах
 function watcher() {
     //путь к файлам, что нужно сделать. и вписывать в сценарий.
     gulp.watch(path.watch.files, copy);
     gulp.watch(path.watch.html, html);
     gulp.watch(path.watch.scss, scss);
     gulp.watch(path.watch.js, js);
     gulp.watch(path.watch.images, images);
 }

export { svgSprive }

const fonts = gulp.series(otfToTtf, ttfToWoff,fonstStyle);

const mainTasks = gulp.series(fonts, gulp.parallel(copy,html, scss, js, images));

//построение сценарием выполнения задач. 
//используем последовательнный скрипт. series.
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher ));
//  server

const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip)


//экспорт сценариев
export {dev}
export {build}
export {deployZIP}

 //выполнение сценария по умолчанию 
 gulp.task('default', dev);