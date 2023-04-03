const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [new webpack.HotModuleReplacementPlugin(),],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ['ts-loader']
        },
        {
          test: /\.css$/,
          use: [  'style-loader', 'css-loader' ]
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js' ],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: 'public/index.html'
        })
    ],
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, "build"),
    },
};