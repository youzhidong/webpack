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
    ]
};