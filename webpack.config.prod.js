const PATH = require('path');
const HtmlWebpackPLugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: PATH.resolve(__dirname, './src/index.js')
  },
  output: {
    path: PATH.resolve(__dirname, './dist'),
    filename: './js/[name].js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPLugin({
      template: PATH.resolve(__dirname, './public/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].css'
    })
  ],
};