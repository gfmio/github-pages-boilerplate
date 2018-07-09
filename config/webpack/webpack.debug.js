// Webpack debug config

const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "development",
    output: {
        path: path.join(__dirname, "..", "..", "dist", "debug"),
        filename: path.join(".", "static", "js", "[name].js"),
        publicPath: "/",
    },
    module: {
        rules: [{
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
        }]
    },
    devtool: "source-map",
    plugins: [],
});
