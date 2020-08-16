const path=require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { GenerateSW, InjectManifest } = require('workbox-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {
	  main: "./src/index.jsx"
  },
  output: {
	  path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/"
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
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
        ]
      }
    ]
  },
  plugins: [
	  new HtmlWebpackPlugin({
		  filename: "index.html",
		  template: "src/index.html"
    }),
    new GenerateSW(), 
    new InjectManifest({swSrc: './src/sw.js'}),
    //new ManifestPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    historyApiFallback: true,
  }
}
