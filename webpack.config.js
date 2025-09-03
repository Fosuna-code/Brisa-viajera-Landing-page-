const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Entry point
  entry: './src/index.js',

  // Output
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Clean dist folder before each build
  },

  // Mode
  mode: 'development',

  // Module rules
  module: {
    rules: [
      // HTML loader
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      // CSS loader with PostCSS and Tailwind
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },

  // Plugins
  plugins: [
    // HTML plugin
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    // CSS extraction plugin
    new MiniCssExtractPlugin({
      filename: 'global.css',
    }),
  ],

  // Dev server configuration
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    open: true, // Open browser automatically
    hot: true,  // Enable hot reloading
  },

  // Source maps for debugging
  devtool: 'source-map',
};
