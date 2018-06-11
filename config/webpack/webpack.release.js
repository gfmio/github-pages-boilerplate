// Webpack release config

const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const { CheckerPlugin } = require("awesome-typescript-loader");
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: "production",

    output: {
        path: path.join(__dirname, "..", "..", "dist", "release"),
        filename: path.join(".", "assets", "js", "main.js"),
        publicPath: "/",
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader",
            options: {
                configFileName: path.join(__dirname, "..", "tsconfig", "tsconfig.release.json"),
            }
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

    plugins: [
        new ExtractTextPlugin("assets/css/style.css"),
        new CheckerPlugin({
            configFileName: path.join(__dirname, "..", "tsconfig", "tsconfig.release.json"),
        }),
        new CopyWebpackPlugin([{
            from: './html/index.html',
            to: '.',
        }]),
        new UglifyJsPlugin({
            parallel: true,
            sourceMap: true,
            uglifyOptions: {
                ie8: true,
                compress: true,
                warnings: false
            },
        }),
    ]
});
