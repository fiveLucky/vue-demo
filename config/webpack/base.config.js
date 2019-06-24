const MiniCssExtractPlugin = require('mini-css-extract-plugin');



export function getCommonLoaders(isProd) {
  return [
    {
      test: /\.vue$/,
      use: 'vue-loader'
    },
    {
      test: /\.jsx?$/,
      use: 'babel-loader'
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        isProd ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader?modules=true'
      ]
    },
    {
      test: /\.less/,
      use: [
        isProd ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader?modules=true',
        {
          loader: 'less-loader',
        }
      ]
    },
  ]

}
export function getProdLoaders() {
  return [
    {
      test: /\.(png|jpe?g|gif|woff|woff2)$/,
      use: 'url-loader?limit=8192&mimetype=application/font-woff'
    }
  ]

} 