var gulp = require('gulp');
var ts = require("gulp-typescript");


gulp.task('default', [], function () {
    var tsProject = ts.createProject('./src/server/tsconfig.json');
    var tsresult = tsProject.src()
        //   .pipe(sourcemaps.init())
        .pipe(tsProject());

    return tsresult.js
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist'));

});

gulp.task('watch', function () {
    gulp.watch(['./src/server/*'], ['default']);
});