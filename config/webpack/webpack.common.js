// Webpack common base config

const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: ["./app/index.tsx", "./scss/index.scss"],
    context: path.join(__dirname, "..", "..", "src"),
    resolve: {
        extensions: [".html", ".ts", ".tsx", ".js", ".json"],
    },

    module: {
        rules: [],
    },

    plugins: [
        new CopyWebpackPlugin([{
            from: './assets/**/*',
            to: '.'
        }]),
        new CopyWebpackPlugin([{
            from: './html/index.html',
            to: '.',
        }, {
            from: './html/404.html',
            to: '.',
        }]),
        // new MiniCssExtractPlugin({
        //     // Options similar to the same options in webpackOptions.output
        //     // both options are optional
        //     filename: "assets/css/style.css",
        //     chunkFilename: "[name].css"
        // }),
    ]
};
