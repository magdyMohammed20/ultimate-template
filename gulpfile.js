let gulp = require("gulp"),
  prefixer = require("gulp-autoprefixer"),
  concat = require("gulp-concat"),
  liveReload = require("gulp-livereload"),
  minify = require("gulp-minify"),
  notify = require("gulp-notify"),
  pug = require("gulp-pug"),
  sass = require("gulp-sass"),
  sourcemaps = require("gulp-sourcemaps");

// Html Task
const html = () => {
  return gulp
  .src("./stage/html/*.pug")
  .pipe(pug({ pretty: true }))
  .pipe(gulp.dest("dist"))
  .pipe(liveReload());
}

// Css Task
// ["./stage/css/**/*.css"] : For Css Files In Libs
// ["./stage/css/**/*.scss"] : For Sass Files
const css = () => {
  return gulp
  .src(["./stage/css/**/*.css", "./stage/css/**/*.scss"])
  .pipe(sourcemaps.init())
  .pipe(sass({ outputStyle: "compressed" }))
  .pipe(prefixer("last 10 version"))
  .pipe(concat("main.css"))
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest("dist/css"))
  .pipe(liveReload());
}

// Js Task
const js = () => {
  return gulp
  .src("./stage/js/*.js")
  .pipe(concat("main.js"))
  .pipe(minify())
  .pipe(gulp.dest("dist/js"))
  .pipe(liveReload());
}

const watch = () => {
  require("./server.js");
  liveReload.listen();
  gulp.watch("./stage/html/*.pug", html);
  gulp.watch(["./stage/css/**/*.css", "./stage/css/**/*.scss"], css);
  gulp.watch("./stage/js/*.js", js);
}

module.exports = {
  watch
}