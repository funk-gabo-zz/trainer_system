const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const path = require('path')

module.exports = {
  entry: {
    app: './src/index.js',
 },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  devServer: {
    hot: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: path.resolve('./src/assets/icon.png'),
    }),
    new WebpackPwaManifestPlugin({
      name: 'Trainer System - Sistema de Gestión de Capacitaciones',
      shortname: 'Trainer_sys',
      description: 'Sistema de gestión de Capacitaciones Wisetrack',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve('./src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    })
  ],
  mode: "development",
  performance: {
    hints: false,
  },
  devtool: "eval-cheap-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
