const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    devtool: false,
    entry: './src/main.js',
    mode: "development",
    devServer: {
      port: 3000,
    //   contentBase: path.join(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                // process.env.NODE_ENV === 'development'
                //     ? 'vue-style-loader'
                //     : MiniCssExtractPlugin.loader,
                'vue-style-loader',
                'css-loader',
                'postcss-loader',
                'sass-loader',
                // {
                //     loader: 'sass-resources-loader',
                //     options: {
                //         resources: [
                //             util.resolve('src/styles/config/*.scss'),
                //             util.resolve('src/styles/mixins/*.scss')
                //         ]
                //     }
                // }
            ]
          },
          {
            test: /\.css$/,
            include: /(node_modules[/\\]element-ui|src)/,
            use: [
                // process.env.NODE_ENV === 'development'
                //     ? 'vue-style-loader'
                //     : MiniCssExtractPlugin.loader,
                'vue-style-loader',
                'css-loader',
                'postcss-loader'
            ]
          }
        ]
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html')
        }),
        new ModuleFederationPlugin({
            // 提供给其他服务加载的文件
            filename: "remoteEntry.js",
            // 唯一ID，用于标记当前服务
            name: "app1",
            library: { type: "var", name: "app1" },
            // 需要暴露的模块，使用时通过 `${name}/${expose}` 引入
            exposes: {
                './Header': "./src/components/Header.vue",
                './PageA': "./src/pages/demo.vue",
                './indexScss': "./src/index.scss",
                './testFn': "./src/utils/test.js",
            }
          })
      ]
}