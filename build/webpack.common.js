const path = require('path');
const webpack = require('webpack');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


function resolve(dir) {
  return path.join(__dirname, '../', dir)
}

module.exports = {
  // entry: resolve('./src/main.js'),
  // output: {
  //   filename: './index.js',
  // },
  resolve: {
    alias: {
      '@': resolve('src'),
    }
  },
  plugins: [
    // copy custom static assets
    // new CopyWebpackPlugin([{
    //   from: path.resolve(__dirname, '../public'),
    //   to: path.resolve(__dirname, '../dist'),
    //   ignore: ['.*', 'index.html']
    // }]),
    new CleanWebpackPlugin(['dist'], {
      root: resolve(''),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
    }),
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }]
    }]
  }
};
