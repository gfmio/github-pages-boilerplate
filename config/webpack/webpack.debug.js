// Webpack debug config

const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const { CheckerPlugin } = require("awesome-typescript-loader");
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const extractCSS = new ExtractTextPlugin({
    filename: "assets/css/[name].css",
    disable: false,
    allChunks: true
});

module.exports = merge(common, {
    mode: "development",

    output: {
        path: path.join(__dirname, "..", "..", "dist", "debug"),
        filename: path.join(".", "static", "js", "[name].js"),
        publicPath: "/",
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader",
            options: {
                configFileName: path.join(__dirname, "..", "tsconfig", "tsconfig.debug.json"),
                compilerOptions: {
                    declaration: false,
                }
            }
        }, {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
        }, {
            test: /\.(css|scss)$/,
            use: extractCSS.extract({
                fallback: 'style-loader',
                use: [{
                    loader: "css-loader",
                    options: {
                        minimize: false || {/* CSSNano Options */ }
                    },
                }, {
                    loader: "sass-loader"
                }],
            }),
        }]
    },

    devtool: "source-map",

    plugins: [
        extractCSS,
        new CheckerPlugin({
            configFileName: path.join(__dirname, "..", "tsconfig", "tsconfig.debug.json"),
        }),
    ]
});
