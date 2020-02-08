import gulp from 'gulp';
import replace from 'gulp-replace';
import path from 'path';
const argv = require('minimist')(process.argv.slice(2));

require('./gulp.e2e');
require('./gulp.test');
require('./gulp.project');

exports.default = (done) => {
    console.log('default task run');
    done();
};


gulp.task('bump-version', done => {
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
