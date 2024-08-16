// const path = require('path');
// const webpack = require('webpack');

// module.exports = {
//   mode: 'development',
//   entry: [
//     'webpack-hot-middleware/client?reload=true',
//     './src/index.js'
//   ],
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//     publicPath: '/' // Ensure this is set correctly
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'], // Load CSS files
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//     alias: {
//       'monaco-editor': path.resolve(__dirname, 'node_modules/monaco-editor')
//     },
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//   ],
// };
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/', // Ensure this is set correctly
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    fallback: {
      "fs": false, // Ignore the 'fs' module
      "path": require.resolve("path-browserify"), // Use path-browserify for path module
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(), // Include this plugin for HMR
  ],
  target: 'web',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    hot: true, // Enable HMR
  },
};
