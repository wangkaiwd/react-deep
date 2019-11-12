const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const absPath = dir => path.resolve(__dirname, dir);
module.exports = {
  context: absPath('./src'),
  mode: 'development',
  entry: {
    main: './index.tsx'
  },
  output: {
    filename: '[name][contenthash:8].js',
    path: absPath('./dist'),
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      template: absPath('./public/index.html')
    })
  ]
};
