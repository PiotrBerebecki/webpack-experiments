const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({}),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'Webpack experiment 02',
      description: 'Webpack tutorial',
    }),
  ],
  devServer: {
    port: 3000,
  },
  devtool: 'inline-source-map',
};
