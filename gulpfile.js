var gulp = require('gulp');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');

gulp.task('lint', function() {
  return gulp.src('libs/fonts.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
  return gulp.src('libs/*.js')
    .pipe(gulp.dest('chrome'))
    .pipe(gulp.dest('safari/arretsurimage-fontsize.safariextension'));
});

gulp.task('images', function() {
  return gulp.src('images/*.png')
    .pipe(gulp.dest('chrome'))
    .pipe(gulp.dest('safari/arretsurimage-fontsize.safariextension'));
});

gulp.task('icons', function() {
  return gulp.src('icons/*.png')
    .pipe(gulp.dest('chrome'))
    .pipe(rename(function (path) {
      path.basename = path.basename.substring(0, 4) + "-" + path.basename.substring(4);
    }))
    .pipe(gulp.dest('safari/arretsurimage-fontsize.safariextension'));
});

gulp.task('watch', function() {
  gulp.watch('libs/*.js', ['lint', 'scripts']);
  gulp.watch('images/*.png', ['images']);
  gulp.watch('icons/*.png', ['icons']);
});

gulp.task('default', ['lint', 'scripts', 'images', 'icons', 'watch']);
