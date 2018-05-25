const ipcRenderer = require('electron').ipcRenderer;
let collectModel = document.getElementById("collectModel");
collectModel.addEventListener("click", clickButton);

function extendObj(id){
    var temp = {};
    var array = document.getElementById(id).getElementsByTagName("li");
    var arrayLength = array.length;
    for (var i = 0; i < arrayLength; i++){
        var dat = {};
        dat[i] = {
            type: array[i].classList[0],
            name: array[i].innerHTML
        };
        $.extend(temp, dat);
    };
    return temp
};

function clickButton(){
    var model = {};
    $.extend(model, extendObj("sortable"));
    console.log(model)
    ipcRenderer.send("submitModel", model);
}