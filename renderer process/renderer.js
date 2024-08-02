// renderer.js
const { ipcRenderer } = require('electron');

document.getElementById('myButton').addEventListener('click', () => {
  ipcRenderer.send('button-click');
});

ipcRenderer.on('button-reply', (event, arg) => {
  console.log(arg); // Print the message from the main process
});
