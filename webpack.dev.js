const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js');

const app = express();
const compiler = webpack(webpackConfig);

// Serve static files from 'public' directory
app.use(express.static('public'));

// Use Webpack Dev Middleware to serve bundled files
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true },
}));

// Use Webpack Hot Middleware for hot reloading
app.use(webpackHotMiddleware(compiler));

app.listen(3000, () => {
  console.log('Webpack Dev Server listening on port 3000');
});
