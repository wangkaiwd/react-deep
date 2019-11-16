import path from 'path';

import merge from 'webpack-merge';
import baseConfig from './webpack.config';

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: '../dist',
    hot: true,
  },
});
