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
            name: "app2",
            remotes: {
              app1: "app1@http://localhost:8080/remoteEntry.js",
            },
        }),
    ]
}