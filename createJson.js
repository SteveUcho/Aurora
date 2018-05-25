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

    //sortable array - aka model
    $.extend(model, extendObj("sortable"));

    // this stuff is not needed, we only want to save the model
        //Nodes
        // var sortableNodes = document.getElementById("nodes").getElementsByTagName("li");
        // var lengthNodes = sortableNodes.length;
        // for (var i = 0; i < lengthNodes; i++){
        //     var dat = {
        //         type: sortableNodes[i].classList[0],
        //         name: sortableNodes[i].innerHTML
        //     }
        //     $.extend(temp, dat);
        // }
        // $.extend(model, temp);
        // var temp = {};
        // $.extend(model, extendObj("nodes"))
        
        //opti
        // var sortableOpti = document.getElementById("opti").getElementsByTagName("li");
        // var lengthOpti = sortableOpti.length;
        // for (var i = 0; i < lengthOpti; i++){
        //     var dat = {
        //         type: sortableOpti[i].classList[0],
        //         name: sortableOpti[i].innerHTML
        //     }
        //     $.extend(temp, dat);
        // }
        // $.extend(model, temp);

    console.log(model)
        // $.extend(model, extendObj("opti"))

    ipcRenderer.send("submitModel", model);
}