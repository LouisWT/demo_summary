const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dev = !!process.env.WEBPACK_SERVE;

module.exports = {
  mode: dev ? 'development' : 'production',
  devtool: dev ? 'cheap-module-eval-source-map' : 'hidden-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkname].js'
  },
  module: {
    rule: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            }
          }
        ]
      }
    ]
  },
  plugin: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunksSortMode: 'none',
    })
  ]
}