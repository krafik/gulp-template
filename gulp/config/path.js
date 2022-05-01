//имя папки нашего проекта. импортируем модуль(нужно поменять на модульность типах pcg)
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path={
    build:{
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
        scss: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        fonts: `${buildFolder}/fonts/`
    },
    src:{
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        // html: `${srcFolder}/*.pug`,
        files: `${srcFolder}/files/**/*.*`,
        svgIcons: `${srcFolder}/svgicons/*.svg`,
        // fonts: `${srcFolder}/fonts/*.otf`,
        // fonts: `${srcFolder}/fonts/`,
    },
    watch:{
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        // html: `${srcFolder}/**/*.pug`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean:buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp:``
}