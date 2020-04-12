const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const outputDirectory = "./client/build";

module.exports = {
  entry: path.join(__dirname, "./client/src/index.jsx"), // where to build dependency graph
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "bundle.js",
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/": "http://localhost:8080",
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // if (test) run this
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./client/public/index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
