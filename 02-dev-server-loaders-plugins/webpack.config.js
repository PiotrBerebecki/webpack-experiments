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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: [{ loader: 'babel-loader' }],
      },
    ],
  },
  plugins: [
    // This is already used if using `webpack -p`
    // new webpack.optimize.UglifyJsPlugin({}),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'Webpack experiments',
      description: 'Webpack tutorial',
    }),
  ],
  devServer: {
    port: 3000,
  },
};
