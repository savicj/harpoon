var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
    styles: {
        src: "./src/sass/**/*.scss",
        dest: "./dist/css"
    }
};

function style() {
    return (
        gulp
            .src(paths.styles.src)
             .pipe(sass()).on("error", sass.logError)
             .pipe(autoprefixer({  browsers: ["last 2 versions"]  }))
             .pipe(gulp.dest(paths.styles.dest))
    );
}

exports.style = style;

function watch(){
    gulp.watch(paths.styles.src, style)
}
    
exports.watch = watch