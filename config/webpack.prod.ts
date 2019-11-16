import merge from 'webpack-merge';
import baseConfig from './webpack.config';

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  externals: {
    react: {
      commonjs: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
});