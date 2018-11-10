var gulp = require("gulp"),
sass = require("gulp-sass"),
browserSync = require("browser-sync");

gulp.task("sass", function(){
 gulp.src('app/scss/main.scss')
 .pipe(sass())
 .pipe(gulp.dest('app/css'))
 .pipe(browserSync.reload({stream: true}));
});

gulp.task("watch",["sass", "browser"], function(){
 gulp.watch("app/scss/**/*.scss", ['sass']);
});

gulp.task("browser", function(){
 browserSync({
  server: {baseDir:"app"},
  notify: false});
});

gulp.task('build', function() {

  var buildCss = gulp.src([
    'app/css/*.css',        
    ])
  .pipe(gulp.dest('build/css'))   

    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
    .pipe(gulp.dest('build'));

  });
