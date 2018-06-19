
var gulp        = require('gulp');
    browserSync = require('browser-sync').create();
    sass        = require('gulp-sass');
    image       = require('gulp-imagemin');
    uglify      = require('gulp-uglify');
    concat      = require('gulp-concat');





// Copy All HTML files
    gulp.task('copyHtml', function(){
      gulp.src('src/*.html')
          .pipe(gulp.dest('dist'));
    });

// Compile Sass & Inject Into Browser
  gulp.task('sass', function() {
    return gulp.src(['src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});


//image  optimize
  gulp.task('image', function () {
    gulp.src('src/img/*')
    .pipe(image())
    .pipe(gulp.dest('dist/img'));

});

// Minify JS
gulp.task('minify', function(){
  gulp.src('src/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});


// Scripts
gulp.task('scripts', function(){
  gulp.src('src/js/*.js')
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

// Watch Sass & Serve
  gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./dist"
    });

    gulp.watch(['node_modules/bootstrap/scss/*.scss','src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch('src/js/*js', ['scripts']);
    gulp.watch('src/images/*', ['image']);
    gulp.watch('src/*.html', ['copyHtml']);
    gulp.watch('src/js/*js', ['minify']);

});

// Default Task
gulp.task('default', ['serve','copyHtml', 'image', 'sass', 'scripts', 'minify']);
