const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devServer: {
        // contentBase: path.resolve(__dirname, "dist"),
        hot: true,
        historyApiFallback: true,
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                        },
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'tristana',
            template: 'public/index.html'
        }),
        new ModuleFederationPlugin({
            // 提供给其他服务加载的文件
            filename: "remoteEntry.js",
            // 唯一ID，用于标记当前服务
            name: "app1",
            library: { type: "var", name: "app1" },
            // 需要暴露的模块，使用时通过 `${name}/${expose}` 引入
            exposes: {
                './Header': "./src/components/Header.js",
            }
        })
    ]
}