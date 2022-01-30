const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 7000
  },
  mode: "development"
};
