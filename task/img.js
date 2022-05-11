const { src, dest } = require("gulp");

// Плагины
const plumber = require("gulp-plumber");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");

// Обработка Image
const img = () => {
  return src("./src/img/*.{png,jpg,jpeg,webp,gif,svg}")
    .pipe(plumber())  
    .pipe(newer("./public/img"))
    .pipe(imagemin())
    .pipe(dest("./public/img"));
}

module.exports = img;