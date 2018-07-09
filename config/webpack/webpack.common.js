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
            logo: './assets/favicon.png',
            output: './assets/favicons/',
            inject: true,
            emitStats: true,
            persistentCache: false,
            config: {
              path: '/assets/favicons',
            },
        }),
        new CopyWebpackPlugin([{
            from: './assets/**/*',
            to: '.'
        }]),
    ]
};
