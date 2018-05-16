const electron = require('electron');
const {app, BrowserWindow} = electron;
const url = require('url');
const path = require('path');

app.on('ready', function(){
    const win = new BrowserWindow({
        titleBarStyle: 'hidden',
        backgroundColor: '#FFF',
        center: true,
        opacity: .95
    });
    win.loadFile('html/index.html');
});

exports.openWindow = function(filename) {
    let page = win
    win.loadFile('html/' + filename + ".html")
}