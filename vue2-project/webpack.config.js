const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devtool: false,
  entry: "./src/main.js",
  mode: "development",
  devServer: {
    port: 3001,
    open: true,
    hot: true,
    host: "local-ipv4",
    // ipc: true,
    // contentBase: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          // process.env.NODE_ENV === 'development'
          //     ? 'vue-style-loader'
          //     : MiniCssExtractPlugin.loader,
          "vue-style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
          // {
          //     loader: 'sass-resources-loader',
          //     options: {
          //         resources: [
          //             util.resolve('src/styles/config/*.scss'),
          //             util.resolve('src/styles/mixins/*.scss')
          //         ]
          //     }
          // }
        ],
      },
      {
        test: /\.css$/,
        include: /(node_modules[/\\]element-ui|src)/,
        use: [
          // process.env.NODE_ENV === 'development'
          //     ? 'vue-style-loader'
          //     : MiniCssExtractPlugin.loader,
          "vue-style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
    new ModuleFederationPlugin({
      name: "app2",
      remotes: {
        app1: "app1@http://localhost:3000/remoteEntry.js",
      },
    }),
  ],
};
