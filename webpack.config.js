// node  作为中间件

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                template: './index.html'
            }
        ),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
        ]
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false, // 是否压缩
        port: 9000,
        open: true
    }
};