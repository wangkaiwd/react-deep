import merge from 'webpack-merge';
import baseConfig, { EnvProps } from './webpack.config';
import { absPath } from './helper';

module.exports = (env: EnvProps) => merge(baseConfig(env), {
  mode: 'production',
  devtool: false,
  entry: {
    main: './index.tsx',
  },
  output: {
    filename: '[name].js',
    path: absPath('../dist'),
    library: 'WUI',
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
});
