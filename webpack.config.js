const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const absPath = dir => path.resolve(__dirname, dir);
module.exports = {
  context: absPath('./src'),
  mode: 'development',
  entry: {
    main: './index.tsx'
  },
  output: {
    filename: '[name].js',
    path: absPath('./dist'),
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        // .: 匹配任意单个字符，想要匹配点号，需要在前面加`\`转义符(escape character)
        // x?: 匹配前面的模式x 0或1次，这里匹配.ts或.tsx
        // $: 匹配输入结尾。这里匹配以.ts或.tsx结尾的文件
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      template: absPath('./public/index.html')
    }),
    new CleanWebpackPlugin()
  ]
};
