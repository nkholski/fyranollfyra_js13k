const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  watch: true,

  devServer: {
    contentBase: "./dist",
    hot: true,
    // inline: false,
    host: "localhost",
  },
});
