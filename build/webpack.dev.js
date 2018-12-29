const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    disableHostCheck: true, //  新增该配置项
    clientLogLevel: 'info',
    hot: true,
  },
  module: {
    rules: [{
      test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 1000, //bytes
          name: '[name][hash:7].[ext]',
          outputPath: 'assets'
        }
      }
    }]
  }
});
