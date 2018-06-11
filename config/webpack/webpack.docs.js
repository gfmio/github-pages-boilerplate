// Webpack config for release

const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const release = require('./webpack.release.js');

module.exports = merge(release, {
    output: {
        path: path.join(__dirname, "..", "..", "docs"),
        filename: path.join(".", "assets", "js", "main.js"),
        publicPath: path.join(".", "docs", "assets"),
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: './CNAME',
            to: '.',
        }, {
            from: './.nojekyll',
            to: '.',
        }]),
    ],
});
