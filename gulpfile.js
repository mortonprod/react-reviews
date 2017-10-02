const gulp = require("gulp");
const shell = require("gulp-shell");
gulp.task('default', function () {
  gulp.src('./images/*')
      .pipe(gulp.dest('./dist/images'));
});
/**
 * Runs webpack when needed. 
 * We don't want to have two build chains this is why we use the same webpack config.
 */
//gulp.task('client:build', function () {
//  shell.task(['npm run build']);
//});
/**
 * This will watch the src code and rebuild the dist when needed.
 */
//gulp.task('client:watch', function () {
//  gulp.watch('src/*', ['client:build']);
//});

/**
 * Starts the server and then restarts it if the code changes,
 * We don't need to watch the client here. Webpack will deal with the client.
 * Nodemon will deal with exposing the apis to the app.
 * DOES NOT RUN USING GULP!!!!!
 */
//gulp.task('server:watch', function () {
//  shell.task(['./node_modules/nodemon/bin/nodemon.js ./server.js localhost 3000']);
//});