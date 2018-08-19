// node  作为中间件

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                template: './index.html'
            }
        )
    ],
    module: {
        rules: [
            {
                test: /\.js$/, // 已什么结尾的文件
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false, // 是否压缩
        port: 9000,
        open: true
    }
};