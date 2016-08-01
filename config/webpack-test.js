const helpers = require('./helpers');
const webpackMerge = require('webpack-merge');
const webpackCommon = require('./webpack-common');

const testConfig = {
  bail: true,
  module: {
    postLoaders: [
      {
        test: /\.(js|ts)$/,
        loader: 'istanbul-instrumenter-loader',
        include: helpers.root('src'),
        exclude: [
          /\.(e2e|spec)\.ts$/,
          /node_modules/
        ]
      }
    ]
  }
};

module.exports = webpackMerge({}, webpackCommon, testConfig);
