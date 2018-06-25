var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './lib');
var APP_DIR = path.resolve(__dirname, './');

var config = {
    entry: "./index.js",
    output: {
        path: BUILD_DIR,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: [/\.jsx?$/],
                include: APP_DIR,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['env', 'react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ],
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
};

module.exports = config;