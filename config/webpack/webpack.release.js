// Webpack release config

const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const { CheckerPlugin } = require("awesome-typescript-loader");
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const extractCSS = new ExtractTextPlugin({
    filename: "static/css/[name]-[hash].css",
    disable: false,
    allChunks: true
});

module.exports = merge(common, {
    mode: "production",

    output: {
        path: path.join(__dirname, "..", "..", "dist", "release"),
        filename: path.join(".", "static", "js", "[name]-[hash].js"),
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

    plugins: [
        extractCSS,
        new CheckerPlugin({
            configFileName: path.join(__dirname, "..", "tsconfig", "tsconfig.release.json"),
        }),
        new UglifyJsPlugin({
            parallel: true,
            sourceMap: true,
            uglifyOptions: {
                ie8: true,
                compress: true,
                warnings: false
            },
        }),
        new CopyWebpackPlugin([{
            from: './CNAME',
            to: '.',
        }, {
            from: './.nojekyll',
            to: '.',
        }]),
    ]
});
