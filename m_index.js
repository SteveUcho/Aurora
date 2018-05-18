// These are just import statements
const electron = require('electron');
const remot = require('electron').remote;
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


//From here are the maintanace buttons
// find maintance list
let list = document.getElementById('maintain');
// create li element
var li = document.createElement('li');
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
});
// adding the button to the current page
li.appendChild(openDev);
list.appendChild(li); // added li to list

// create li element
var li = document.createElement('li'); // var's can be restated, not let
// here i'm creating a refresh button so thats its easier
// to reload the new html that i write
let refresh = document.createElement('button');
refresh.textContent = "Refresh";
refresh.addEventListener('click', function(){
    let win = remot.getCurrentWindow();
    // this is the reload command
    win.reload();
});
li.appendChild(refresh);
list.appendChild(li); // added new li to list without chnaging list

// all commands and useful info can be found in the electron docs