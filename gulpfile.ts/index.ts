import gulp from 'gulp';
import replace from 'gulp-replace';
import path from 'path';
const argv = require('minimist')(process.argv.slice(2));
import shell from 'gulp-shell';
import { exec } from 'child_process';


require('./gulp.e2e');
require('./gulp.test');

gulp.task('default', (done) => {
    console.log('default');
    done();
});

gulp.task('postInstall', shell.task('ts-node scripts/generateKeyFile.ts'));

gulp.task('bump-version', (done) => {
    const ngEnv = argv.configuration;
    const envDir = path.resolve(__dirname, `./src/environments`);
    const envFilePath = path.join(envDir, `environment.${ngEnv}.ts`);
    return gulp
        .src([envFilePath])
        .pipe(
            replace(/version:\s?"\d+.\d+.\d+.\d+",?/g, (match) => {
                const matches = /(version:\s?")(\d+.\d+.\d+.\d+)(",?)/g.exec(match);
                const versionString = matches[2];
                const versionParts = versionString.split('.').map(v => +v);
                versionParts[versionParts.length - 1]++;
                const newVersionString = versionParts.join('.');
                const replacedVersionString = match.replace(
                    versionString,
                    newVersionString
                );
                console.log(
                    `${
                    this.file.path
                    } New version to be written: ${replacedVersionString}`
                );
                return replacedVersionString;
            })
        )
        .pipe(gulp.dest(envDir));
});

gulp.task('deploy', shell.task(`firebase deploy --only hosting`));

gulp.task('get-version', () => {
    return Promise.resolve(shell.task('node scripts/getversion'));
});

gulp.task('test-deploy', (done) => {
    const pjson = require('../package.json');
    const version: string = pjson.version;
    exec(`firebase deploy --only hosting -m ${version}`, (err, stdout, stderr) => {
        console.log(stdout.trim());
        if (stderr) {
            console.error({ stderr });
        }
        done();
    });
});
