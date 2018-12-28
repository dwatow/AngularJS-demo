const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    index: resolve('./src/main.js')
  },
  output: {
    filename: './index.js',
    path: resolve('./dist')
  },
  resolve: {
    alias: {
      '@': resolve('./')
    }
  },
  plugins: [
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public'),
        to: path.resolve(__dirname, '../dist'),
        ignore: ['.*']
      }
    ]),
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
    }),
    // new webpack.ProvidePlugin({
    //   'jQuery': 'jquery',
    //   'alasql': 'alasql'
    // }),
  ],
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader"
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }]
    }, {
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
      test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          outputPath: '/assets',
        }
      }, {
        loader: 'url-loader',
        options: {
          outputPath: '/assets',
          limit: 10000 //bytes
        }
      }]
    }]
  }
};
