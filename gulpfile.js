var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
var uglify = require('gulp-uglify');
var minifier = require("gulp-uglify/minifier");
var uglifyjs = require("uglify-js"); //ES6 support

gulp.task("bundle", function () {
    return browserify({
        entries: "./app/dist/main.jsx",
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest("app/dist"))

});

gulp.task("minify", ["bundle"], function() {
  return gulp.src("./app/dist/main.js")
    .pipe(minifier({}, uglifyjs))
    .pipe(gulp.dest("app/dist"));
});

gulp.task("copy", ["bundle", "minify"], function () {
    return gulp.src(["app/index.html","app/lib/bootstrap-css/css/bootstrap.min.css","app/style.css"])
        .pipe(gulp.dest("app/dist"));
});

gulp.task("default",["copy"],function(){
   console.log("Gulp completed...");
});
