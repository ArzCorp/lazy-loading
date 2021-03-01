const PATH = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: PATH.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: PATH.resolve(__dirname, './dist/js'),
    filename: '[name].js',
  },
  mode: 'development',
  devServer: {
    open: true,
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATH.resolve(__dirname, './public/index.html')
    }),
  ]
};