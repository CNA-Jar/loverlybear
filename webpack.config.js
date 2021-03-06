var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var BowerWebpackPlugin = require("bower-webpack-plugin");
/*var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();*/
module.exports = {
    devtool: 'source-map',
    entry: {
        main: './main.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
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
        ],
    },
    resolve: {
        extensions: ['', '.js', '.ts'],
        modulesDirectories: ["node_modules", "bower_components"]
    },
    plugins:[
        new WebpackMd5Hash(),
        new HtmlWebpackPlugin({
            hash: true,
        }),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        ),
        // new DashboardPlugin(dashboard.setData)
    ],
    devServer:{
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 9090
    }
};