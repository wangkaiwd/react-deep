import merge from 'webpack-merge';
import baseConfig, { EnvProps } from './webpack.config';

module.exports = (env: EnvProps) => merge(baseConfig(env), {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: '../dist',
    hot: true,
  },
});
