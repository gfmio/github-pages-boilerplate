// Webpack debug config

const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const { CheckerPlugin } = require("awesome-typescript-loader");
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
    mode: "development",

    output: {
        path: path.join(__dirname, "..", "..", "dist", "debug"),
        filename: path.join(".", "assets", "js", "main.js"),
        publicPath: path.join(".", "dist", "debug", "assets"),
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader",
            options: {
                configFileName: path.join(__dirname, "..", "tsconfig", "tsconfig.debug.json"),
            }
        }, {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
        }, {
            test: /\.(css|scss)$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: false || {/* CSSNano Options */ }
                    }
                }, {
                    loader: 'sass-loader'
                }]
            })
        }]
    },

    devtool: "source-map",

    plugins: [
        new ExtractTextPlugin("assets/css/style.css"),
        new CheckerPlugin({
            configFileName: path.join(__dirname, "..", "tsconfig", "tsconfig.debug.json"),
        }),
    ]
});
