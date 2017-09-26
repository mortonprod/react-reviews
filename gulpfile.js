var gulp = require("gulp");

gulp.task('default', function () {
  gulp.src('./images/*')
      .pipe(gulp.dest('./dist/images'));
});