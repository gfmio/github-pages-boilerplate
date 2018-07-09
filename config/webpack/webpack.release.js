// Webpack release config

const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

if (process.env.NODE_ENV !== "production") {
    throw new Error("Only build for release with NODE_ENV set to production.");
}

module.exports = merge(common, {
    mode: "production",

    output: {
        path: path.join(__dirname, "..", "..", "dist", "release"),
        filename: path.join(".", "static", "js", "[name]-[hash].bundle.js"),
        chunkFilename: path.join(".", "static", "js", "[name]-[hash].bundle.js"),
        publicPath: "/",
    },

    module: {
        rules: []
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }

        }
    },

    plugins: [
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
