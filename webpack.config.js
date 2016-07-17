'use strict';

var webpack = require('webpack');

var config = {
  entry: {
    bundle: __dirname + '/src/index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  stats: {
    colors: true,
    modules: false,
    reasons: true
  },
  module: {
    loaders: [{
      test: /\.(jsx|js)?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise'
    }),
    new webpack.NoErrorsPlugin({
      'process.env.NODE_ENV': '"development"'
    })
  ],
  node: {
    fs: 'empty'
  }
};

module.exports = config;
