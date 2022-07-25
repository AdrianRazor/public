const { src, dest } = require("gulp");

// Плагины
const plumber = require("gulp-plumber");
const concat = require("gulp-concat");
const cssimport = require("gulp-cssimport");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const groupCssMediaQueries = require("gulp-group-css-media-queries");

// Обработка CSS
const css = () => {
  return src("./src/css/*.css")
    .pipe(plumber())
    .pipe(concat("main.css"))
    .pipe(cssimport())
    .pipe(autoprefixer())
    .pipe(groupCssMediaQueries())
    .pipe(dest("./public/css"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(dest("./public/css"));
};

module.exports = css;
