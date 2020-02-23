import { exec } from 'child_process';
import { src } from 'gulp';
import compodoc from '@compodoc/gulp-compodoc';

/**
 * executes the post install scripts for npm
 */
export function postInstall() {
    return exec('ts-node scripts/generateKeyFile.ts', (err, stdout, stderr) => {
        if (stdout) {
            console.log(stdout.trim());
        }
        if (stderr) {
            console.error(stderr);
        }
        console.log('key file generated');
    });
};

export function docs() {
    return src('src/**/*.ts').pipe(
        compodoc({
            name: 'GGTavern Docs',
            output: 'docs',
            tsconfig: 'tsconfig.json',
            theme: 'readthedocs'
        })
    );
}

export function docsserve() {
    return src('src/**/*.ts').pipe(
        compodoc({
            name: 'GGTavern Docs',
            output: 'docs',
            tsconfig: 'tsconfig.json',
            theme: 'readthedocs',
            watch: true,
            serve: true,
        })
    );
}

/**
 * executes the deployment to firebase
 */
export function deploy() {
    const pjson = require('../package.json');
    const version = pjson.version;
    return exec(`firebase deploy --only hosting -m ${version}`, (err, stdout, stderr) => {
        console.log(stdout.trim());
        if (stderr) {
            console.error({ stderr });
        }
    });
}
