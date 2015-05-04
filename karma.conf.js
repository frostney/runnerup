'use strict';

var path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/helpers/**/*.js',
      'test/spec/components/**/*.js'
    ],
    preprocessors: {
      'test/spec/components/**/*.js': ['webpack']
    },
    webpack: {
      cache: true,
      module: {
        loaders: [{
          test: /\.gif/,
          loader: 'url-loader?limit=10000&mimetype=image/gif'
        }, {
          test: /\.jpg/,
          loader: 'url-loader?limit=10000&mimetype=image/jpg'
        }, {
          test: /\.png/,
          loader: 'url-loader?limit=10000&mimetype=image/png'
        }, {
          test: /\.js$/,
          loader: 'babel-loader'
        }, {
          test: /\.less/,
          loader: 'style-loader!css-loader!less-loader'
        }, {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }, { test: /\.woff$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
          { test: /\.woff2$/,   loader: "url-loader?limit=10000&minetype=application/font-woff2" },
          { test: /\.ttf$/,    loader: "file-loader" },
          { test: /\.eot$/,    loader: "file-loader" },
          { test: /\.svg$/,    loader: "file-loader" }]
      },
      resolve: {
        alias: {
          'styles': path.join(process.cwd(), './src/styles/'),
          'components': path.join(process.cwd(), './src/scripts/components/')
        }
      }
    },
    webpackServer: {
      stats: {
        colors: true
      }
    },
    exclude: [],
    port: 8080,
    logLevel: config.LOG_INFO,
    colors: true,
    autoWatch: false,
    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],
    reporters: ['progress'],
    captureTimeout: 60000,
    // to avoid DISCONNECTED messages
    browserDisconnectTimeout: 10000, // default 2000
    browserDisconnectTolerance: 1, // default 0
    browserNoActivityTimeout: 60000, //default 10000
    singleRun: true
  });
};
