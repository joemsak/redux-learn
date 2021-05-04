const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    disableHostCheck: true
  },
  mode: "development"
};
