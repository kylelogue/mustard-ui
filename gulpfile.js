const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

gulp.task('serve', function() {
    browserSync.init({
        server: './'
    });
    gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('sass', function() {
    return gulp.src('src/scss/mustard-ui.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions', '> 2%'],
        cascade: false
    }))
    .pipe(rename({
        suffix:'.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve', 'sass']);
