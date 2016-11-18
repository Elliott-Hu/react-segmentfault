var webpack = require("webpack");
var BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');

module.exports = {
  entry:{
    index:"./index.js",
    style:"./style.css",
    vendor:[
      "babel-polyfill",
      "react",
      "react-dom",
      "react-redux",
      "redux",
    ]
  },
  output:{
    path:"./",
    filename:"[name]"+"dist.js"
  },
  module:{
    loaders:[{
      test:/\.js$/,
      excluce:/node_modules/,
      loader:"babel",
      query:{
        presets:["es2015","stage-2","react"],
      }
    },{
      test:/\.css$/,
      loader:"style!css",
    }]
  },
  plugins:[
    new BellOnBundlerErrorPlugin(),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
    new webpack.HotModuleReplacementPlugin(),
    ],
  devServer:{
    hot:true,
    inline:true,
    host:"0.0.0.0",
    historyApiFallback: true,
  }
}