import merge from 'webpack-merge';
import baseConfig from './webpack.config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { absPath } from './helper';

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: absPath('../public/index.html'),
    }),
  ],
});
