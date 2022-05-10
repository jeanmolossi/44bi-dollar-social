const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './public',
        port: 3000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader'] },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        new HtmlWebpackPlugin({
            template: './templates/index.dev.html',
        })
    ],
})
