// these are import statements
const electron = require('electron');
const {app, BrowserWindow} = electron;
const url = require('url');
const path = require('path');
const fs = require('fs');
const spawn = require('child_process').spawn;

// here i'm turning on the app
// ready is a keyword, other keywords can be found in the electron documentation
app.on('ready', function(){
    // trying to make global variable, not sure if it works...
    const win = new BrowserWindow({
        titleBarStyle: 'hidden',
        backgroundColor: '#FFF',
        center: true,
        opacity: .95
    });
    // loading file
    win.loadFile('html/index.html');
    // fixPath();
});

app.on('window-all-closed', function(){
    app.quit()
})