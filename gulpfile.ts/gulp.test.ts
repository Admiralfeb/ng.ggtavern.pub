import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('coverage', shell.task('codecov -f coverage/*.json'));

// Chrome
gulp.task('run-test-in-chrome', shell.task('ng test --browsers=Chrome'));
gulp.task('ci-test-in-chrome', shell.task('ng test --no-watch --no-progress --browsers=ChromeHeadless'));
gulp.task('test:chrome', gulp.series('run-test-in-chrome'));
gulp.task('ci:test:chrome', gulp.series('ci-test-in-chrome'));

// Firefox
gulp.task('run-test-in-firefox', shell.task('ng test --browsers=Firefox'));
gulp.task('ci-test-in-firefox', shell.task('ng test --no-watch --no-progress --browsers=FirefoxHeadless'));
gulp.task('test:firefox', gulp.series('run-test-in-firefox'));
gulp.task('ci:test:firefox', gulp.series('ci-test-in-firefox'));

gulp.task('run-test', shell.task('ng test'));
gulp.task('test', gulp.series('run-test'));

gulp.task('lint', shell.task('ng lint'));
