import merge from 'webpack-merge';
import baseConfig, { EnvProps } from './webpack.config';

module.exports = (env: EnvProps) => merge(baseConfig(env), {
  mode: 'production',
});
