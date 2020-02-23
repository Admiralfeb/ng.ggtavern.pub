import { exec } from 'child_process';

export function lint() {
    return exec('ng lint', (err, stdout, stderr) => {
        if (stdout) {
            console.log(stdout.trim());
        }
        if (stderr) {
            console.error(stderr);
        }
    });
}

export function coverage() {
    return exec('codecov -f coverage/*.json', (err, stdout, stderr) => {
        if (stdout) {
            console.log(stdout.trim());
        }
        if (stderr) {
            console.error(stderr);
        }
    });

}

export function test() {
    return exec('ng test', (err, stdout, stderr) => {
        if (stdout) {
            console.log(stdout.trim());
        }
        if (stderr) {
            console.error(stderr);
        }
    });
}

export function testChrome() {
    return exec('ng test --browsers=Chrome', (err, stdout, stderr) => {
        if (stdout) {
            console.log(stdout.trim());
        }
        if (stderr) {
            console.error(stderr);
        }
    });
}

export function testFirefox() {
    return exec('ng test --browsers=Firefox', (err, stdout, stderr) => {
        if (stdout) {
            console.log(stdout.trim());
        }
        if (stderr) {
            console.error(stderr);
        }
    });
}

export function citestChrome() {
    return exec('ng test --no-watch --no-progress --browsers=ChromeHeadless', (err, stdout, stderr) => {
        if (stdout) {
            console.log(stdout.trim());
        }
        if (stderr) {
            console.error(stderr);
        }
    });
}

export function citestFirefox() {
    return exec('ng test --no-watch --no-progress --browsers=FirefoxHeadless', (err, stdout, stderr) => {
        if (stdout) {
            console.log(stdout.trim());
        }
        if (stderr) {
            console.error(stderr);
        }
    });
}
