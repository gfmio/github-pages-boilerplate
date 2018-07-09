// Webpack common base config

const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const AppManifestWebpackPlugin = require('app-manifest-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { CheckerPlugin } = require("awesome-typescript-loader");
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const production = process.env.NODE_ENV === "production";

const extractCSS = new ExtractTextPlugin({
    filename: production
        ? "static/css/[name]-[hash].css"
        : "static/css/[name].css",
    disable: false,
    allChunks: true
});

module.exports = {
    entry: "./app/index.tsx",
    context: path.join(__dirname, "..", "..", "src"),
    resolve: {
        extensions: [".scss", ".css", ".html", ".ts", ".tsx", ".js", ".json"],
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader",
            options: {
                configFileName: path.join(__dirname, "..", "tsconfig", "tsconfig.json"),
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
        }],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            inject: false,
            minify: true,
            template: './html/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: './404.html',
            inject: false,
            minify: true,
            template: './html/404.html',
        }),
        new AppManifestWebpackPlugin({
            // Your source logo
            logo: "./favicon/favicon.png",
            // Output path can be relative. Icons will be saved to webpack output directory + output
            output: production
                ? "/static/favicons-[hash:8]/"
                : "/static/favicons/",
            // Change prefix of files  for correct paths in your html and manifest files
            prefix: "/",
        }),
        new CopyWebpackPlugin([{
            from: './assets/**/*',
            to: './static'
        }]),
        extractCSS,
        new CheckerPlugin({
            configFileName: path.join(__dirname, "..", "tsconfig", "tsconfig.json"),
        }),

    ]
};
