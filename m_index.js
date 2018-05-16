const electron = require('electron');
const remot = require('electron').remote
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow;

let openWin = document.getElementById('new-window');
openWin.textContent = "Open Window";
openWin.addEventListener('click', function(){
    let win = new BrowserWindow({
        height: 500,
        width: 500,
        titleBarStyle: 'hidden',
        backgroundColor: '#FFF',
        center: true,
        opacity: .95
    });
    win.loadFile('html/pageTwo.html');
}, false);

let openDev = document.createElement('button');
openDev.textContent = "Open DevTools";
openDev.addEventListener('click', function(){
    let win = remot.getCurrentWindow();
    win.webContents.openDevTools();
})
document.body.appendChild(openDev)

let refresh = document.createElement('button');
refresh.textContent = "Refresh";
refresh.addEventListener('click', function(){
    let win = remot.getCurrentWindow();
    win.reload();
})
document.body.appendChild(refresh)