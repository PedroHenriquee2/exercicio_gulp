const gulp = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')

function comprimeImagens() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function comprimeJavaScript() {
    return gulp.src('./source/script/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    return gulp.src('./source/sass/*.scss') 
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/css'));
}

function funcaoPadrao(callback) {
    console.log("Executando via Gulp");
    callback();
}

function dizOi(callback) {
    console.log("Olá Gulp");
    dizTchau();
    callback();
}

function dizTchau() {
    console.log("Tchau Gulp");
}

exports.default = gulp.series(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
exports.sass = compilaSass;
exports.javaScript = comprimeJavaScript
exports.images = comprimeImagens
