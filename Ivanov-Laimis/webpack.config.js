const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
      },

    resolve: {
     extensions: [".js", ".jsx"],
},

    module: {
        rules: [
          {
            test: /\.js(x)?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],                 
            },
            },
          },
        ],
      },
      devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
      },
      plugins: [
          new HtmlWebpackPlugin({
filename: "index.html",
template: "src/index.html",
}),
      ],
  };