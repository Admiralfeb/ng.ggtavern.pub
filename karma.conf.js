// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-junit-reporter')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/ggtavern'),
      reports: ['html', 'lcovonly', 'text-summary', 'cobertura'],
      fixWebpackSourcePaths: true
    },
    coverageReporter: {
      reporters: [
        // generates ./coverage/lcov.info
        { type: 'lcovonly', subdir: '.' },
        // generates ./coverage/coverage-final.json
        { type: 'json', subdir: '.' }
      ]
    },
    reporters: ['progress', 'kjhtml', 'junit', 'coverage'],
    junitReporter: {
      outputDir: './tests/spec'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'Firefox'],
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: ['--headless', '--no-sandbox']
      },
      FirefoxHeadless: {
        base: 'Firefox',
        flags: ['-headless']
      }
    },
    singleRun: false,
    restartOnFileChange: true
  });
};
