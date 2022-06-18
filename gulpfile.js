const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
// compile scss into css
function style() {
    // 1. where is my scss file
    return gulp.src('./scss/**/*.scss')
        // 2. pass that file through sass compiler
        .pipe(sass())
        // 3. where doIsave the compiled CSS?
        .pipe(gulp.dest('./css'))
}
exports.style = style;