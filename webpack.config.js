const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry:
    {
        app: ["@babel/polyfill", './src/app/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/app.bundle.js'
    },
    devServer: {
        port: 5050
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            hash: true,
            template: './src/index.html',
            minify: {
                collapseWhitespace:
                    true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }

        }),
        new MiniCssExtractPlugin({
            filename: 'css/app.bundle.css'
        }),
    ]
};