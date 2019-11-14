const path = require('path');
const absPath = dir => path.resolve(__dirname, dir);
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  externals: {
    react: {
      commonjs: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM'
    }
  }
});
