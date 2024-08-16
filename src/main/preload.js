// // preload.js
// window.addEventListener('DOMContentLoaded', () => {
//     // Your preload script code
//   });
const { contextBridge } = require('electron');
const titlebarContext = require('./titlebarContext').default;

contextBridge.exposeInMainWorld('electron_window', {
  titlebar: titlebarContext,
});
