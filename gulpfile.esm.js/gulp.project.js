import gulp from 'gulp';
import { exec } from 'child_process';



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

gulp.task('deploy', done => {
    const pjson = require('../package.json');
    const version = pjson.version;
    exec(`firebase deploy --only hosting -m ${version}`, (err, stdout, stderr) => {
        console.log(stdout.trim());
        if (stderr) {
            console.error({ stderr });
        }
        done();
    });
});
