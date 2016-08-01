module.exports = (config) => {
  config.set({
    basePath: '..',
    frameworks: ['jasmine'],
    exclude: [],
    files: [{
      pattern: './config/spec-bundle.js',
      watched: false
    }],
    preprocessors: {
      './config/spec-bundle.js': ['webpack', 'sourcemap']
    },
    webpack: require('./webpack-test'),
    webpackServer: {noInfo: true},
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: [
      'chromeCI'
    ],
    singleRun: true,
    customLaunchers: {
      chromeCI: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    }
  });
};
