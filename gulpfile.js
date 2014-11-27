var gulp = require('gulp');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');

gulp.task('lint', function() {
  return gulp.src('libs/link.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
  return gulp.src('libs/*.js')
    .pipe(gulp.dest('chrome'))
    .pipe(gulp.dest('safari/gaminglive-hd-link.safariextension'));
});

gulp.task('icons', function() {
  return gulp.src('icons/*.png')
    .pipe(gulp.dest('chrome'))
    .pipe(rename(function (path) {
      path.basename = path.basename.substring(0, 4) + "-" + path.basename.substring(4);
    }))
    .pipe(gulp.dest('safari/gaminglive-hd-link.safariextension'));
});

gulp.task('watch', function() {
  gulp.watch('js/*.js', ['lint', 'scripts']);
  gulp.watch('icons/*.png', ['icons']);
});

gulp.task('default', ['lint', 'scripts', 'icons', 'watch']);
