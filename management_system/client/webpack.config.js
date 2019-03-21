var webpack = require('webpack');
module.exports = {
    //配置模式
    mode:'development',

    // 页面入口文件配置
    entry: {
        index: './client/static/js/view/main/index.js'
    },
    // 入口文件输出配置
    output: {
        path: __dirname + '/static/dist/', //默认输出路径前有webpack.config.js的目录路径
        filename: '[name].bundle.js'
    },
    // entry:'./js/view/main/index.js',
    // output:{
    //     path: __dirname + '/output/js/',
    //     filename :'index.bundle.js'
    // },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },

            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.css', '.json'],
    },

}