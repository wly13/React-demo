const path=require('path');
module.exports = {
    entry: path.join(__dirname,'./src/index.js'), // 入口文件路径
    output: {
        path:path.join(__dirname ,"/"),
        filename: 'app.js'
    },
    devServer: {
        inline: true,
        port: 9999
    },
    module: {
        rules: [
            {
                test: /\.js$/, // babel 转换为兼容性的 js
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'latest']
                }
            },
            {
                test:/\.css?$/,
                loaders: ['style-loader','css-loader']

            }
        ]
    },

    performance: {
        hints: "warning", // 枚举
        maxAssetSize: 30000000, // 整数类型（以字节为单位）
        maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
        assetFilter: function (assetFilename) {
            // 提供资源文件名的断言函数
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');

        }
    }
}