const {app, BrowserWindow} = require('electron');

/**
 * MainWindow
 */
function createWindow() {
  const win = new BrowserWindow({
    width: 640,
    height: 480,
    hasShadow: false,
    transparent: true,
    frame: false,
    resizable: false,
  });
  // MagickCode
  app.dock.hide();
  win.setAlwaysOnTop(true, 'floating');
  win.setVisibleOnAllWorkspaces(true);
  win.setFullScreenable(false);
  app.dock.show();

  win.loadFile('./dist-bodypix-app/index.html');

  // win.webContents.openDevTools();
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
