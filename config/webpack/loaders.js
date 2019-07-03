const MiniCssExtractPlugin = require('mini-css-extract-plugin');



function getCommonLoaders(isProd) {
  return [
    {
      // 匹配文件
      test: /\.vue$/,
      // 使用相应的loaders
      use: 'vue-loader'
    },
    {
      test: /\.jsx?$/,
      use: 'babel-loader'
    },
    {
      test: /\.css$/,
      // 排除文件夹
      exclude: /node_modules/,
      // loader可以是多个
      use: [
        isProd ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader?modules=true'
      ]
    },
    {
      test: /\.less/,
      use: [
        isProd ? MiniCssExtractPlugin.loader : 'style-loader',
        // inline语法
        'css-loader?{modules:true}',
        // 可以是对象
        // {
        //   loader: 'css-loader',
        //   options: {
        //     moudles: true
        //   }
        // },
        'less-loader'
      ]
    },
  ]

}
function getProdLoaders() {
  return [
    {
      test: /\.(png|jpe?g|gif|woff|woff2)$/,
      use: 'url-loader?limit=8192&mimetype=application/font-woff'
    },
    {
      test: /\.(mp4|ogg|mp3)$/,
      use: 'file-loader'
    }
  ]
}

module.exports = { getCommonLoaders, getProdLoaders }