const merge = require('webpack-merge');

const webpackBase = require('./webpack.base.js');
const plugins = require('./plugins');

module.exports = merge(webpackBase, {
  devtool: '#eval-source-map',
  plugins: plugins.develop
});
