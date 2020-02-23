import { series } from 'gulp';
import { exec } from 'child_process';

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

export const e2e = series(updateDrivers, rune2e);
export const e2eChrome = series(updateDrivers, rune2eChrome);
export const e2eFirefox = series(updateDrivers, rune2eFirefox);
export const cie2eChrome = series(updateDrivers, runcie2eChrome);
export const cie2eFirefox = series(updateDrivers, runcie2eFirefox);
