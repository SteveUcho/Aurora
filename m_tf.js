// These are just import statements
    // const electron = require('electron');    // no need to restate them because of m_index.js
    // const remot = require('electron').remote;
const spawn = require('child_process').spawn;
    // const BrowserWindow = electron.remote.BrowserWindow;
const fs = require('fs');   // writes and reads files
const path = require('path');
const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// finding tf test button
let tfTest = document.getElementById('tf-test');
tfTest.addEventListener('click', function(){
    console.log('clicked!')
    // spawn is a node method to call commands from command line
    // let file = path.join(__dirname, '../', 'tf-test.py').toString()
    // console.log(file);
    py = spawn('python3', ['./tf-test.py'], {shell: true, stdio:['pipe', 'pipe', 'pipe']});   // first entry is the command, second is the arguments
    console.log('ran!')

    var dat = 203

    console.log('var set!')

    py.stdout.on('data', function(data){    // gets data from print statements
        console.log('Turnig on')
        let text = document.createElement('p');  // make p element
        text.textContent = data.toString();      // save data to p element
        console.log('got it!')
        // text.style = 'width: 100vw'
        document.body.appendChild(text);         // append p element to body
        console.log('done')
    });

    py.stdin.write(JSON.stringify(dat));
    py.stdin.end();
});

// finding ol
let ol = document.getElementById('steps');
// creating li
var li 