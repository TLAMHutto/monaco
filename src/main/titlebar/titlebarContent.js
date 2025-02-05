import { ipcRenderer } from 'electron';

const titlebarContext = {
  exit() {
    ipcRenderer.invoke('window-close');
  },
  undo() {
    ipcRenderer.invoke('web-undo');
  },
  redo() {
    ipcRenderer.invoke('web-redo');
  },
  cut() {
    ipcRenderer.invoke('web-cut');
  },
  copy() {
    ipcRenderer.invoke('web-copy');
  },
  paste() {
    ipcRenderer.invoke('web-paste');
  },
  delete() {
    ipcRenderer.invoke('web-delete');
  },
  select_all() {
    ipcRenderer.invoke('web-select-all');
  },
  reload() {
    ipcRenderer.invoke('web-reload');
  },
  force_reload() {
    ipcRenderer.invoke('web-force-reload');
  },
  toggle_devtools() {
    ipcRenderer.invoke('web-toggle-devtools');
  },
  actual_size() {
    ipcRenderer.invoke('web-actual-size');
  },
  zoom_in() {
    ipcRenderer.invoke('web-zoom-in');
  },
  zoom_out() {
    ipcRenderer.invoke('web-zoom-out');
  },
  toggle_fullscreen() {
    ipcRenderer.invoke('web-toggle-fullscreen');
  },
  minimize() {
    ipcRenderer.invoke('window-minimize');
  },
  toggle_maximize() {
    ipcRenderer.invoke('window-toggle-maximize');
  },
  open_url(url) {
    ipcRenderer.invoke('open-url', url);
  },
};

export default titlebarContext;
