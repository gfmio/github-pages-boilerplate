// Webpack common base config

const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const AppManifestWebpackPlugin = require('app-manifest-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./app/index.tsx",
    context: path.join(__dirname, "..", "..", "src"),
    resolve: {
        extensions: [".scss", ".css", ".html", ".ts", ".tsx", ".js", ".json"],
    },

    module: {
        rules: [],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            inject: false,
            template: './html/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: './404.html',
            inject: false,
            template: './html/404.html',
        }),
        new AppManifestWebpackPlugin({
            // Your source logo
            logo: "./favicon/favicon.png",
            // Output path can be relative. Icons will be saved to webpack output directory + output
            output: '/static/favicons-[hash:8]/',
            // Change prefix of files  for correct paths in your html and manifest files
            prefix: "/"
        }),
        new CopyWebpackPlugin([{
            from: './assets/**/*',
            to: './static'
        }]),
    ]
};
