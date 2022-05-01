import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css'; //сжимает css
import webpcss from 'gulp-webpcss'; //вывод webp images
import autoprefixer from 'gulp-autoprefixer'; //добавление вендорніх префикстов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; //групировка медиа запросов

const sass = gulpSass(dartSass);
//вызов из плагина галп-сасс с передачей компилятора сасс

export const scss = () =>{
    return app.gulp.src(app.path.src.scss, {sourcemaps: app.isDev})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "Scss",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(app.plugins.if(
        app.isBuild,
        groupCssMediaQueries()
    ))
    .pipe(app.plugins.if(
        app.isBuild,
        webpcss({
            //если браузер поддерживет webp, 
            webpClass: ".webp",
            noWebpClass: ".no-webp"
        })
    ))
    .pipe(app.plugins.if(
        app.isBuild,
        autoprefixer({
            grid:true,
            overrideBrowserslist: ["last 3 version"],
            cascade: true
        })
    ))
    //раскоментировать, если не нужен сжатій дубль стилей
    .pipe(app.gulp.dest(app.path.build.scss))
    .pipe(app.plugins.if(
        app.isBuild,
        cleanCss()
    ))
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.scss))
    .pipe(app.plugins.browsersync.stream());
}