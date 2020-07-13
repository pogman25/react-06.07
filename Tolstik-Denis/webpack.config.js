const path=require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
	  main: "./src/index.jsx"
  },
  output: {
	path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:6].js"
  },
  resolve: {extensions: ['.js', '.jsx']},
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      }
    ]
  },
  plugins: [
	  new HtmlWebpackPlugin({
		  filename: "index.html",
		  template: "src/index.html"
	  }),
  ]
}
