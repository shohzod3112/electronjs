// In the main process (main.js)
const { ipcMain } = require('electron');

ipcMain.on('button-click', (event) => {
  console.log('Button clicked in renderer process');
  event.sender.send('button-reply', 'Message received in main process');
});

// In the renderer process (renderer.js)
const { ipcRenderer } = require('electron');

ipcRenderer.send('button-click');

ipcRenderer.on('button-reply', (event, arg) => {
  console.log(arg); // Print the message from the main process
});
