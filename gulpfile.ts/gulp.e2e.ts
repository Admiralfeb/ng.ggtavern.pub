import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('update-driver', shell.task('npm explore protractor -- node ./bin/webdriver-manager update'));

// Chrome
gulp.task('run-e2e-in-chrome', shell.task('ng e2e --protractor-config=e2e/chrome.protractor.conf.js'));
gulp.task('ci-e2e-in-chrome', shell.task('ng e2e --protractor-config=e2e/ci-chrome.protractor.conf.js'));
gulp.task('e2e:chrome', gulp.series('update-driver', 'run-e2e-in-chrome'));
gulp.task('ci:e2e:chrome', gulp.series('update-driver', 'ci-e2e-in-chrome'));

// Firefox
gulp.task('run-e2e-in-firefox', shell.task('ng e2e --protractor-config=e2e/firefox.protractor.conf.js'));
gulp.task('ci-e2e-in-firefox', shell.task('ng e2e --protractor-config=e2e/ci-firefox.protractor.conf.js'));
gulp.task('e2e:firefox', gulp.series('update-driver', 'run-e2e-in-firefox'));
gulp.task('ci:e2e:firefox', gulp.series('update-driver', 'ci-e2e-in-firefox'));

gulp.task('run-e2e', shell.task('ng e2e'));
gulp.task('e2e', gulp.series('update-driver', 'run-e2e'));
