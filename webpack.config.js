const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack');


module.exports = {
  mode: 'development',
  devServer: {port: 3000},
  devtool: 'eval',
  watch: true,
  entry: path.resolve(__dirname, 'client', 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },

      {
        test: /\.(jpg|png|svg)$/,
        exclude: /node-modules/,
        use: {
          loader: 'file-loader',
           options: {
          name: '[path][name].[hash].[ext]',
          },
        }, 
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
        ],
      },
      
      
      
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   exclude: /node-modules/,
      //   loader: 'file-loader',
      //   options: {
      //     publicPath: 'assets',
      //   },
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client', 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css' ,
        chunkFilename: '[id].css'
      })
  ],
  
    ///...

};
