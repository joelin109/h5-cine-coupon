const path = require("path");
const webpack = require("webpack");
const envName = process.env.NODE_ENV === "production" ? "pro.v1640.min" : "dev.v1640";

const vendor_dll = [
  "react",
  "react-dom",
  "react-router-dom",
  "redux",
  "redux-logger",
  "redux-thunk"
];

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    vendor: vendor_dll
  },
  output: {
    path: path.resolve(__dirname, "www/vendor"),
    filename: "[name]." + envName + ".js",
    library: "[name]_dll"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "www/vendor", "manifest-[name]-dll.json"),
      name: "[name]_dll"
    })
  ]
};
