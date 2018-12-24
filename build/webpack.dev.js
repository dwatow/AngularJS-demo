const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../dist',
    disableHostCheck: true, //  新增该配置项
    port: 8080
    // hot: true,
    // https: true
  }
});
