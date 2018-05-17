// These are just import statements
const electron = require('electron');
const remot = require('electron').remote
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow;

// re-assigning the button in index.html whose id is new-window
let openWin = document.getElementById('new-window');
openWin.textContent = "Open Window";

// giving the button new functionalities
openWin.addEventListener('click', function(){
    // this specifies what window I want before creation
    let win = new BrowserWindow({
        height: 500,
        width: 500,
        titleBarStyle: 'hidden',
        backgroundColor: '#FFF',
        center: true,
        opacity: .95
    });
    // creating such window with stuff in pageTwo.html
    win.loadFile('html/pageTwo.html');
}, false);


// creating a button
let openDev = document.createElement('button');

// due to electron bug, webkit drag does not work with dev tools open
// here i'm making a button to easily access it so that it can ve closed
// another option is to open dev tools and make it a pop up
// giving that button attributes
openDev.textContent = "Open DevTools";
openDev.addEventListener('click', function(){
    // getting current window
    let win = remot.getCurrentWindow();
    // ordering it to open dev tools
    win.webContents.openDevTools();
})
// adding the button to the current page
document.body.appendChild(openDev)

// here i'm creating a refresh button so thats its easier
// to reload the new html that i write
let refresh = document.createElement('button');
refresh.textContent = "Refresh";
refresh.addEventListener('click', function(){
    let win = remot.getCurrentWindow();
    // this is the reload command
    win.reload();
})
document.body.appendChild(refresh)

// all commands and useful info can be found in the electron docs