var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
gulp.task('default', function() {
  //return tsProject.src()
  //.pipe(tsProject())
  //.js.pipe(gulp.dest("__tests__"));
  return gulp.src(['./src/*'], { base: './src' })                     
          .pipe(tsProject())
          .pipe(gulp.dest('./__tests__'));
});
