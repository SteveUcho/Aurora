// These are just import statements
    // const electron = require('electron');    // no need to restate them because of m_index.js
    // const remot = require('electron').remote;
const spawn = require('child_process').spawn;
    // const BrowserWindow = electron.remote.BrowserWindow;
const fs = require('fs');   // writes and reads files

// finding tf test button
let tfTest = document.getElementById('tf-test');
tfTest.addEventListener('click', function(){

    // spawn is a node method to call commands from command line
    var spawn = require('child_process').spawn,
    py = spawn('python3', ['tf-test.py']);   // first entry is the command, second is the arguments

    py.stdout.on('data', function(data){    // gets data from print statements
        let text = document.createElement('p');  // make p element
        text.textContent = data.toString();      // save data to p element
        // text.style = 'width: 100vw'
        document.body.appendChild(text);         // append p element to body
    });
});

// finding ol
let ol = document.getElementById('steps');
// creating li
var li 