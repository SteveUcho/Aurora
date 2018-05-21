// const electron = require('electron');
const remot = require('electron').remote;

let list = document.getElementById('maintain');
var li = document.createElement('li');
let openDev = document.createElement('button');

openDev.textContent = "Open DevTools";
openDev.addEventListener('click', function(){
    let win = remot.getCurrentWindow();
    win.webContents.openDevTools();
});
li.appendChild(openDev);
list.appendChild(li);

var li = document.createElement('li');

let refresh = document.createElement('button');
refresh.textContent = "Refresh";
refresh.addEventListener('click', function(){
    let win = remot.getCurrentWindow();
    // this is the reload command
    win.reload();
});
li.appendChild(refresh);
list.appendChild(li);