var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
    devtool: 'source-map',
    entry: {
        main: './main.ts'
    },
    entry: './main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts', exclude: /node_modules/},
            { test: /\.html$/, loader: 'html-loader'},
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            { test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,loader: 'file'}
        ]
            {test: /\.ts$/, loader: 'ts', exclude: /node_modules/},
            {test: /\.html$/, loader: 'html-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            {test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,loader: 'file'},
        ],
    },
    // require 文件时可省略后缀 .js 和 .ts
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    plugins:[
        new WebpackMd5Hash(),
        new HtmlWebpackPlugin({
            hash: true,
        })
    ],
    // 配置 webpack-dev-server
    devServer:{
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 9090
    }
};