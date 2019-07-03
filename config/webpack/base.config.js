const webpack = require('webpack');

const { DP } = require('./utils')

const { getCommonLoaders } = require('./loaders')

const isProd = process.env.NODE === 'production'

module.exports = {
  // 入口文件路径
  entry: {
    index: './src/index.js'
  },
  // 输出配置
  output: {
    path: DP('dist'),
    filename: 'bundle.js',
    publicPath: ""
  },
  // 模块配置
  module: {
    // 规则
    rules: getCommonLoaders(isProd),
  },
  // 解析模块请求
  resolve: {
    // 指定模块查找的目录
    // modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    // 配置模块别名
    alias: {
      $component: DP('src/component'),
      $util: DP('src/util'),

    }
  },
  plugins: [

  ]
}