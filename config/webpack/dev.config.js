
const merge = require('webpack-merge');
const baseConfig = require('./base.config');

const devConfig = {
  // 模式
  mode: 'development',
  devtool: 'source-map',
  output: {
    publicPath: './'
  },
  devServer: {
    contentBase: './'
  }

}

module.exports = merge.smart(baseConfig, devConfig);