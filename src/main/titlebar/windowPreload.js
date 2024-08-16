const { contextBridge } = require('electron');
const titlebarContext = require('./titlebarContent');

contextBridge.exposeInMainWorld('electron_window', {
  titlebar: titlebarContext,
});
