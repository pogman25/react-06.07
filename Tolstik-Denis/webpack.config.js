const path=require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
	  main: "./src/index.js"
  },
  output: {
	path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:6].js"
  },
  plugins: [
	  new HtmlWebpackPlugin({
		  filename: "index.html",
		  template: "src/index.html"
	  }),
  ]
}
