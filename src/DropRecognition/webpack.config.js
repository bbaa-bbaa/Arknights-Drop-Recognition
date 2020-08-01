var path = require("path");

module.exports = {
  entry: "./main.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "DropRecognition.js",
    libraryTarget: "this"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["url-loader"]
      },
      /*{
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      }*/
    ]
  }
};
