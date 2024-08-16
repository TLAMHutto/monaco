// const { app, BrowserWindow, Menu } = require('electron');
// const path = require('path');
// const express = require('express');
// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');
// const webpackConfig = require('../webpack.config.js');

// let mainWindow;

// function createWindow() {
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js'),
//       contextIsolation: true,
//       enableRemoteModule: false,
//     },
//   });

//   mainWindow.loadURL('http://localhost:3000'); // Ensure this matches the Webpack Dev Server port

//   mainWindow.webContents.on('did-finish-load', () => {
//     console.log('React app loaded');
//   });

//   mainWindow.webContents.on('crashed', () => {
//     console.log('Window crashed');
//   });
// }

// app.whenReady().then(() => {
//   createWindow();

//   app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) createWindow();
//   });
// });

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') app.quit();
// });
const { app, BrowserWindow } = require('electron');
const path = require('path');
const { registerTitlebarIpc } = require('./titlebaripc');
const titlebarMenus = require('./titlebarMenus').default;

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    },
  });

  // Register IPC handlers
  registerTitlebarIpc(mainWindow);

  // Set up the menu (if applicable)
  // Example: mainWindow.setMenu(createMenu(titlebarMenus));

  mainWindow.loadURL('http://localhost:3000'); // Adjust this URL based on your setup
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
