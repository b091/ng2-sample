const webpack = require('webpack');
const helpers = require('./helpers');

module.exports = {
  resolve: {
    root: helpers.root('src'),
    extensions: ['', '.ts', '.js', '.json']
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: [helpers.root('src/index.html')]
      },
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
        exclude: [/\.e2e\.ts$/]
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [helpers.root('src/index.html')]
      },
      {
        test: /\.css$/,
        loaders: ['to-string-loader', 'css-loader'],
        exclude: [helpers.root('src/index.html')]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['raw-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true)
  ],
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true
  }
};
