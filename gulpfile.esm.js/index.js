import { postInstall, deploy, docs, docsserve } from './gulp.project';
import { lint, coverage, testChrome, testFirefox, citestChrome, citestFirefox, test } from './gulp.test';
import { e2e, e2eChrome, e2eFirefox, cie2eChrome, cie2eFirefox } from './gulp.e2e';

exports.default = (done) => {
    console.log('default task run');
    done();
};

// Project
exports.postInstall = postInstall;
exports.docs = docs;
exports.docsserve = docsserve;
exports.deploy = deploy;

// Tests
exports.lint = lint;
exports.test = test;
exports.testChrome = testChrome;
exports.testFirefox = testFirefox;
exports.citestChrome = citestChrome;
exports.citestFirefox = citestFirefox;
exports.coverage = coverage;

// e2e
exports.e2e = e2e;
exports.e2eChrome = e2eChrome;
exports.e2eFirefox = e2eFirefox;
exports.cie2eChrome = cie2eChrome;
exports.cie2eFirefox = cie2eFirefox;
