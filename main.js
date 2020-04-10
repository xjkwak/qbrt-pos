const { app, BrowserWindow, Menu } = require('electron')

function createWindow() {
  Menu.setApplicationMenu(null)
  let win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
	    nodeIntegration:true
    }
  })
  var url = 'http://dev-quebarato.pantheonsite.io/user/logout'
  win.loadURL(url)

  const ses = win.webContents.session;

ses.clearCache(() => {
  alert("Cache cleared!");
});

  // win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
