const { exec } = require('child_process');
const { src, series } = require('gulp');
const compodoc = require('@compodoc/gulp-compodoc');

function defaultTask(done) {
  console.log('default task run');
  done();
}
exports.default = defaultTask;

// Project Level
function postInstall() {
  return exec('ts-node scripts/generateKeyFile.ts', (err, stdout, stderr) => {
    if (stdout) {
      console.log(stdout.trim());
    }
    if (stderr) {
      console.error(stderr);
    }
    console.log('key file generated');
  });
}
exports.postInstall = postInstall;

function deploy() {
  const pjson = require('../package.json');
  const version = pjson.version;
  return exec(`firebase deploy --only hosting -m ${version}`, (err, stdout, stderr) => {
    console.log(stdout.trim());
    if (stderr) {
      console.error({ stderr });
    }
  });
}
exports.deploy = deploy;

function docs() {
  return src('src/**/*.ts').pipe(
    compodoc({
      name: 'GGTavern Docs',
      output: 'docs',
      tsconfig: 'tsconfig.json',
      theme: 'readthedocs'
    })
  );
}
exports.docs = docs;

// Tests
function lint() {
  return exec('ng lint', (err, stdout, stderr) => {
    if (stdout) {
      console.log(stdout.trim());
    }
    if (stderr) {
      console.error(stderr);
    }
  });
}
exports.lint = lint;

function coverage() {
  return exec('codecov -f coverage/*.json', (err, stdout, stderr) => {
    if (stdout) {
      console.log(stdout.trim());
    }
    if (stderr) {
      console.error(stderr);
    }
  });
}
exports.coverage = coverage;

function test() {
  return exec('ng test', (err, stdout, stderr) => {
    if (stdout) {
      console.log(stdout.trim());
    }
    if (stderr) {
      console.error(stderr);
    }
  });
}
exports.test = test;

function testChrome() {
  return exec('ng test --browsers=Chrome', (err, stdout, stderr) => {
    if (stdout) {
      console.log(stdout.trim());
    }
    if (stderr) {
      console.error(stderr);
    }
  });
}
exports.testChrome = testChrome;

function testFirefox() {
  return exec('ng test --browsers=Firefox', (err, stdout, stderr) => {
    if (stdout) {
      console.log(stdout.trim());
    }
    if (stderr) {
      console.error(stderr);
    }
  });
}
exports.testFirefox = testFirefox;

function citestChrome() {
  return exec('ng test --no-watch --no-progress --browsers=ChromeHeadless', (err, stdout, stderr) => {
    if (stdout) {
      console.log(stdout.trim());
    }
    if (stderr) {
      console.error(stderr);
    }
  });
}
exports.citestChrome = citestChrome;

function citestFirefox() {
  return exec('ng test --no-watch --no-progress --browsers=FirefoxHeadless', (err, stdout, stderr) => {
    if (stdout) {
      console.log(stdout.trim());
    }
    if (stderr) {
      console.error(stderr);
    }
  });
}
exports.citestFirefox = citestFirefox;

// E2E
function updateDrivers() {
  return exec('npm explore protractor -- node ./bin/webdriver-manager update', (err, stdout, stderr) => {
    if (stdout) {
      console.log(stdout.trim());
    }
    if (stderr) {
      console.error(stderr);
    }
  });
}

function rune2e() {
  return exec('ng e2e', (err, stdout, stderr) => {
    if (stdout) {
      console.log(stdout.trim());
    }
    if (stderr) {
      console.error(stderr);
    }
  });
}

function rune2eChrome() {
  return exec('ng e2e --protractor-config=e2e/chrome.protractor.conf.js', (err, stdout, stderr) => {
    if (stdout) {
      console.log(stdout.trim());
    }
    if (stderr) {
      console.error(stderr);
    }
  });
}

function rune2eFirefox() {
  return exec('ng e2e --protractor-config=e2e/firefox.protractor.conf.js', (err, stdout, stderr) => {
    if (stdout) {
      console.log(stdout.trim());
    }
    if (stderr) {
      console.error(stderr);
    }
  });
}

function runcie2eChrome() {
  return exec('ng e2e --protractor-config=e2e/ci-chrome.protractor.conf.js', (err, stdout, stderr) => {
    if (stdout) {
      console.log(stdout.trim());
    }
    if (stderr) {
      console.error(stderr);
    }
  });
}

function runcie2eFirefox() {
  return exec('ng e2e --protractor-config=e2e/ci-firefox.protractor.conf.js', (err, stdout, stderr) => {
    if (stdout) {
      console.log(stdout.trim());
    }
    if (stderr) {
      console.error(stderr);
    }
  });
}

exports.e2e = series(updateDrivers, rune2e);
exports.e2eChrome = series(updateDrivers, rune2eChrome);
exports.e2eFirefox = series(updateDrivers, rune2eFirefox);
exports.cie2eChrome = series(updateDrivers, runcie2eChrome);
exports.cie2eFirefox = series(updateDrivers, runcie2eFirefox);
