import path from 'path';

import merge from 'webpack-merge';
import baseConfig from './webpack.config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { absPath } from './helper';

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: '../dist',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: absPath('../public/index.html'),
    }),
  ],
});
