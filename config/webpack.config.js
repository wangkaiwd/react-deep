const { CheckerPlugin } = require('awesome-typescript-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolveTsconfigPathsToAlias } = require('./helper');
const { absPath } = require('./helper');
console.log(resolveTsconfigPathsToAlias());
module.exports = {
  context: absPath('../src'),
  entry: {
    main: './index.tsx'
  },
  output: {
    filename: '[name].js',
    path: absPath('../dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': absPath('../src')
    }
  },
  module: {
    rules: [
      {
        // .: 匹配任意单个字符，想要匹配点号，需要在前面加`\`转义符(escape character)
        // x?: 匹配前面的模式x 0或1次，这里匹配.ts或.tsx
        // $: 匹配输入结尾。这里匹配以.ts或.tsx结尾的文件
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
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
    ]
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      template: absPath('../public/index.html')
    }),
    new CleanWebpackPlugin()
  ]
};
