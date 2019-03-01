const path = require('path');
const webpack = require('webpack');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


function resolve(dir) {
  return path.join(__dirname, '../', dir)
}

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src'),
    }
  },
  plugins: [
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
      test: /\.js$/,
      exclude : /(node_modules)/,
      include: [resolve('src')],
      enforce: "pre",
      use: [{
        loader: "eslint-loader",
      }, {
        loader: "prettier-loader"
      }]
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
