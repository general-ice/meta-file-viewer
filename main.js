const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const fs = require('fs');
const utils = require('util');
require('electron-reload')(__dirname);

let mainWindow;

app.on('ready', () => {
    const htmlPath = path.join('.', 'index.html');

    mainWindow = new BrowserWindow();

    mainWindow.loadFile(htmlPath);
    mainWindow.webContents.openDevTools();

    ipcMain.on('file', async (e, filename) => {
        const fileStat = await utils.promisify(fs.stat)(filename);
        mainWindow.webContents.send('stat', fileStat)
    })
});
