// /*
// =======================
// STARTING CODE
// =======================
// */

// these are import statements
const electron = require('electron');
const {app, BrowserWindow, Menu, ipcMain} = electron;
const url = require('url');
const path = require('path');
const spawn = require('child_process').spawn;
const fs = require('fs');

app.on('ready', function(){
    // trying to make global variable, not sure if it works...
    mainWindow = new BrowserWindow({
        titleBarStyle: 'hidden',
        backgroundColor: '#FFF',
        center: true,
        opacity: 1
    });
    mainWindow.loadFile('html/index.html');
});

app.on('window-all-closed', function(){
    app.quit()
})


/*
=======================
Tensorflow Test Case
=======================
*/


/*
=======================
Index HTML Button JS
=======================
*/

function createWindow(){
    newWindow = new BrowserWindow({
        title: 'new Window!',
        titleBarStyle: 'hidden',
        backgroundColor: '#FFF',
        center: true,
        opacity: 1
    });
    newWindow.loadFile('html/pageTwo.html');
}

//Catching the button
ipcMain.on('button', function(e, items){
    console.log(items);
    //createWindow();
    content = "Testing\nWant to keep testing\n does this work";
    // try { fs.writeFile('myfile.txt', content, 'utf-8'); }
    // catch(e) { alert('Failed to save the file !'); }
    fs.writeFile('myfile.txt', content, 'utf-8', (err) => {
        if (err) throw err;
        console.log('Data written!');
    });
});