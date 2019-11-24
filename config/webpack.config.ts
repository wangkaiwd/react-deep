import { CheckerPlugin } from 'awesome-typescript-loader';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { absPath, resolveTsconfigPathsToAlias } from './helper';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export interface EnvProps {
  NODE_ENV: 'development' | 'production' | 'test' | 'document';
}
const baseConfig: any = (env: EnvProps) => {
  const isDev: boolean = env.NODE_ENV === 'development';
  const isPro: boolean = env.NODE_ENV === 'production';
  return {
    context: absPath('../src'),
    entry: {
      main: './index.tsx',
    },
    output: {
      filename: '[name].js',
      path: absPath('../dist'),
    },
    resolve: {
      alias: resolveTsconfigPathsToAlias(),
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          // .: 匹配任意单个字符，想要匹配点号，需要在前面加`\`转义符(escape character)
          // x?: 匹配前面的模式x 0或1次，这里匹配.ts或.tsx
          // $: 匹配输入结尾。这里匹配以.ts或.tsx结尾的文件
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
          options: {
            configFileName: isDev ? 'tsconfig.json' : 'tsconfig.pro.json',
            // FIXME: 会导致无法生成.d.ts文件
            // useTranspileModule: true,
            // useCache: true,
            // cacheDirectory: absPath('../node_modules/.cache/.awcache'),
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                // Prefer `dart-sass`
                implementation: require('sass'),
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
        },
      ],
    },
    plugins: [
      new CheckerPlugin(),
      new CleanWebpackPlugin(),
      isPro && new HtmlWebpackPlugin({
        template: absPath('../public/index.html'),
      }),
    ].filter(Boolean),
    performance: { hints: false },
  };
};
export default baseConfig;
