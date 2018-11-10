var gulp = require("gulp");
var browserSync = require("browser-sync").create();
// var pug = require("gulp-pug");
var sass = require("gulp-sass");
var del = require("del");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
// var concat = require("gulp-concat");
var srcmaps = require("gulp-sourcemaps");
var webpack = require("webpack-stream");
var imagemin = require("gulp-imagemin");
var imageminJpegRecompress = require("imagemin-jpeg-recompress");
var pngquant = require("imagemin-pngquant");
var cache = require("gulp-cache");

/*---------Server---------*/
gulp.task("server", function() {
  browserSync.init({
    server: {
      baseDir: "docs/"
    }
  });

  gulp.watch("docs/**/*").on("change", browserSync.reload);
});

// /*---------Pug-compile---------*/
// gulp.task("templates:compile", function docsHTML() {
//   return gulp
//     .src(["src/template/index.pug"])
//     .pipe(
//       pug({
//         pretty: true
//       })
//     )
//     .pipe(gulp.dest("docs/"));
// });

/*---------HTML compile---------*/
gulp.task("templates:compile", function() {
  return gulp.src("src/index.html").pipe(gulp.dest("docs/"));
});

/*---------Styles-compile---------*/
gulp.task("styles:compile", function() {
  return gulp
    .src("src/styles/main.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(rename("main.min.css"))
    .pipe(gulp.dest("docs/css"));
});

/* ------------ JS ------------- */
gulp.task("js", function() {
  return gulp
    .src(["src/js/index.js"])
    .pipe(srcmaps.init())
    .pipe(webpack(require("./webpack.config.js")))
    .pipe(uglify())
    .pipe(srcmaps.write())
    .pipe(gulp.dest("docs/js"));
});

/* ------------ Delete ------------- */
gulp.task("clean", function() {
  return del(["docs"]);
});

/* ------------ Copy fonts ------------- */
gulp.task("copy:fonts", function() {
  return gulp.src("./src/fonts/**/*.*").pipe(gulp.dest("docs/fonts"));
});

/* ------------ Copy images ------------- */
gulp.task("copy:images", function() {
  return gulp
    .src("./src/imgs/**/*.*")
    .pipe(
      cache(
        imagemin(
          [
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imageminJpegRecompress({
              loops: 5,
              min: 65,
              max: 70,
              quality: "medium"
            }),
            imagemin.svgo(),
            imagemin.optipng({ optimizationLevel: 3 }),
            pngquant({ quality: "65-70", speed: 5 })
          ],
          {
            verbose: true
          }
        )
      )
    )
    .pipe(gulp.dest("docs/imgs"));
});

// Clearing the cache
gulp.task("clear", function(done) {
  return cache.clearAll(done);
});

/* ------------ Copy ------------- */
gulp.task("copy", gulp.parallel("copy:fonts", "copy:images"));

/* ------------ Watchers ------------- */
gulp.task("watch", function() {
  gulp.watch("src/template/**/*.pug", gulp.series("templates:compile"));
  gulp.watch("src/styles/**/*.scss", gulp.series("styles:compile"));
  gulp.watch("src/js/**/*.js", gulp.series("js"));
});

gulp.task(
  "default",
  gulp.series(
    "clean",
    gulp.parallel("templates:compile", "styles:compile", "js", "copy"),
    gulp.parallel("watch", "server")
  )
);
