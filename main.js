const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 500,
    webPreferences: {
      zoomFactor: 1.0,
      nodeIntegration: true,
      contextIsolation: false,
  },
  resizable: false,
  maximizable: false,
  fullscreen: false,
  fullscreenable: false,
  titleBarStyle: 'hidden',
  titleBarOverlay: {
      color: '#384653',
      symbolColor: '#f5f4ff'
  }
  });

  win.loadFile("./pages/index.html");
};

app.whenReady().then(() => {
  createWindow();
});
