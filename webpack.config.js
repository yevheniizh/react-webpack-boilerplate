const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: `[name].js`,
  },

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: "file-loader",
      },
      {
        test: /\.(js|ts)x?$/,
        loader: require.resolve("babel-loader"),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./src/assets", to: "./src/assets" }],
    }),
    new HtmlWebpackPlugin({ template: "public/index.html" }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = config;
