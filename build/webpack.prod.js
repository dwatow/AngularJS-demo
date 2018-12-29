const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [{
      test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 1000, //bytes
          name: '[hash:7].[ext]',
          outputPath: 'assets'
        }
      }
    }]
  }
});
