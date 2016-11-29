var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',//资源服务器地址
    'webpack/hot/only-dev-server',
    './index.jsx'
  ],
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style-loader!css-loader?modules' },
      { test: /\.js[x]?$/,  exclude: /node_modules/, loader: 'babel-loader' },
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by lidong'),
//代码压缩
//    new webpack.optimize.UglifyJsPlugin({
//      output: {
//        // remove all comments
//        comments: false
//      },
//      compress: {
//        warnings: false
//      }
//    }),
    new CommonsChunkPlugin('init.js'),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
};
