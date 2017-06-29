const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'Webpack experiments',
      description: 'Webpack tutorial',
    }),
    new ExtractTextPlugin({
      filename: 'main.css',
    }),
    new Visualizer(),
    // This is already used if using `webpack -p`
    // new webpack.optimize.UglifyJsPlugin({}),
  ],
  devServer: {
    port: 3000,
  },
  devtool: 'cheap-module-source-map',
};
