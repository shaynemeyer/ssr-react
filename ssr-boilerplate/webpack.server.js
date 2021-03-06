const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform webpack that we're building a bundle for nodejs
  target: "node",

  // Tell webpack the root of our server app.
  entry: './src/index.js',

  // Tell webpack where to put the output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'build')
  },

  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
