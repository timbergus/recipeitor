import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import autoprefixer from 'autoprefixer';

import { resolve } from 'path';

module.exports = (_: undefined, { mode }: { mode: string }) => ({
  entry: {
    app: ['@babel/polyfill', resolve('src', 'index.tsx')],
  },
  output: {
    filename: '[hash].bundle.js',
    path: resolve('dist'),
  },
  devtool: mode === 'production' ? 'source-map' : 'eval',
  devServer: {
    contentBase: resolve('dist'),
    compress: true,
    inline: true,
    hot: true,
    port: 5000,
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              indent: 'postcss',
              plugins: () => [autoprefixer()],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src', 'index.html'),
      favicon: resolve('src', 'assets', 'images', 'luna.png'),
    }),
    new MiniCssExtractPlugin({
      filename: '[hash].bundle.css',
    }),
  ],
});
