var webpack = require('webpack');
module.exports = {
    //配置模式
    mode: 'development',

    // 页面入口文件配置
    entry: {
        index: './client/static/js/view/main/index.js'
    },
    // 入口文件输出配置
    output: {
        path: __dirname + '/static/dist/', //默认输出路径前有webpack.config.js的目录路径
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{//转码解析js
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015", "env", "react", "stage-0"],//设置react和es6的转码及识别
                        plugins: [//调用antd的样式
                            ["import", {
                                "libraryName": "antd",
                                "style": "css"
                            }]
                        ]
                    }
                }],
            },

            {//加载css
                test: /\.css$/,
                loader: "style-loader!css-loader",
            },
            {//加载less
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {//加载图片
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