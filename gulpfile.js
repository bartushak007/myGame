var gulp = require("gulp")
    sass = require("gulp-sass")
    browserSync = require("browser-sync");

    gulp.task("sass", function(){
    	gulp.src('app/scss/main.scss')
    	.pipe(sass())
    	.pipe(gulp.dest('app/css'))
    	.pipe(browserSync.reload({stream: true}));
    })

    gulp.task("watch",["sass", "browser"], function(){
    	gulp.watch("app/scss/**/*.scss", ['sass'])
    })

    gulp.task("browser", function(){
    	browserSync({
    		server: {baseDir:"app"},
    		notify: false})
    })
