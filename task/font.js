const { src, dest } = require("gulp");

// Плагины
const plumber = require("gulp-plumber");
const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");

// Обработка Image
const font = () => {
  return src("./src/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}")
    .pipe(plumber())
    .pipe(newer("./public/font"))
    .pipe(fonter({
      formats: ["ttf", "woff", "eot", "svg"]
    }))
    .pipe(dest("./public/font"))
    .pipe(ttf2woff2())
    .pipe(dest("./public/font"));
}

module.exports = font;