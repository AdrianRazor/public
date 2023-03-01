const { src, dest } = require("gulp");

// Обработка Libs
const libs = () => {
  return src("./src/libs/**/*").pipe(dest("./public/libs"));
};

module.exports = libs;
