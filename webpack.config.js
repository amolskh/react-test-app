const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname);
const APP_DIR = path.resolve(__dirname, 'app');

const config = {
    entry: APP_DIR + '/Index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                include: APP_DIR,
                loaders: ["babel-loader"]
            },
             {
                test: /\.js?/,
                exclude: /node_modules/,
                include: APP_DIR,
                loaders: ["babel-loader"]
            }
        ]
    }
};

module.exports = config;