// webpack配置文件,通过nodejs的模块操作，向外暴露了一个配置对象
const path = require('path');
const webpack = require('webpack');// 启用热更新第2步
// 导入自动生成HTMl文件的插件
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 配置文件中，指定入口，出口
    entry: path.join(__dirname, './src/main.js'),// 指定webpack要打包的文件
    output: {
        path: path.join(__dirname, './dist'),// 指定打包好的文件输出的目录
        filename: 'boundle.js'// 指定输出文件
    },
    devServer: {
        contentBase: "./src",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    plugins: [ // 添加plugins节点配置插件
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),//模板路径
            filename: 'index.html'//自动生成的HTML文件的名称
        })
    ],
    module: { // 用来配置第三方loader模块的
        rules: [ // 文件的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },//处理css文件的规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },// 处理less文件的规则
            { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=1024&name=[name].[ext]' }
        ]
    }

    //使用--hot总是报错npm run dev2
    // devServer: {// 配置webpack-dev-server的第二种形式，比较麻烦
    //     open: true,
    //     post: 3000,
    //     contentBase: "./src",
    //     hot: true// 启用热更新第一步
    // },
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin({
    //         template: path.join(__dirname, 'src/index.html'),//模板路径
    //         filename: 'index.html'//自动生成的HTML文件的名称
    //     })
    // ]
}