const { JUnitXmlReporter } = require('jasmine-reporters');
const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        './src/**/*.e2e-spec.ts'
    ],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            binary: require('puppeteer').executablePath(),
            args: ['--headless', '--no-sandbox']
        }
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () { }
    },
    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.json')
        });
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
        var junitreporter = new JUnitXmlReporter({
            savePath: require('path').join(__dirname, '../tests/e2e'),
            consolidateAll: true
        });
        jasmine.getEnv().addReporter(junitreporter);
    }
};
