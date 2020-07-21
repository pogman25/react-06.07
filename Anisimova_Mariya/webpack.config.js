const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        main: './src/index.jsx'
    },
    output: {   
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
            test: /\.css$/,
            use: [
                { loader: MiniCssExtractPlugin.loader},
                { loader: 'css-loader',
                options: {
                    modules: true
                }},
                {loader: 'less-loader'}
            ]},
            {
                test: /\.js(x)?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3000,
        watchContentBase: true,
    },
}

