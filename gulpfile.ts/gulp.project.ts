import gulp from 'gulp';
import { exec } from 'child_process';
import compodoc from '@compodoc/gulp-compodoc';

gulp.task('postInstall', done => {
    exec('ts-node scripts/generateKeyFile.ts', (err, stdout, stderr) => {
        if (stdout) {
            console.log(stdout.trim());
        }
        if (stderr) {
            console.error(stderr);
        }
        done();
    });
});

gulp.task('docs', _ => {
    return gulp.src('src/**/*.ts').pipe(
        compodoc({
            name: 'GGTavern Documentation',
            output: 'documentation',
            tsconfig: 'tsconfig.json',
            serve: true,
            watch: true,
            open: true
        })
    );
});

gulp.task('ci:docs', done => {
    return gulp.src('src/**/*.ts').pipe(
        compodoc({
            name: 'GGTavern Documentation',
            output: 'documentation',
            tsconfig: 'tsconfig.json',
            coverageTest: true,
            coverageMinimumPerFile: 25
        }));
});

gulp.task('deploy', done => {
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
