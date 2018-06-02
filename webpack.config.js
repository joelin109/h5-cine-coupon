const path = require("path");
const webpack = require("webpack");
const proMode = process.env.NODE_ENV === "production";

module.exports = {
  cache: true,
  entry: {
    index: "./src/webapp/index.js"
    //"admin": './src/webapp/admin.js',
  },
  output: {
    path: path.resolve(__dirname, "www"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].[chunkhash:4].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.resolve(__dirname, "src"),
      }
    ]
  },
  stats: {
    colors: true
  },

  devtool: "cheap-module-source-map"
};
