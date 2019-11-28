"use strict";

function pageLoad() {
    document.getElementById("biggerButton").onclick = buttonClick;
    document.getElementById("check").onchange = checkBling;
    document.getElementById("snoop").onclick = snoopify;
}

function buttonClick() {


    var size = 12;
    setInterval(function() {
        size += 2;
        var textbox = document.getElementById("test");
        textbox.style.fontSize = parseInt(size) + "pt";
    }, 500);


}

function checkBling() {
    // document.getElementById("myCheck").checked = true;
    var checkbox = document.getElementById("check").checked;
    if (checkbox === true) {
        document.getElementById("test").style.fontWeight = "bold";
        document.getElementById("test").style.textDecoration = "underline";
        document.getElementById("test").style.color = "green";
    } else {
        document.getElementById("test").style.fontWeight = "normal";
        document.getElementById("test").style.textDecoration = "none";
        document.getElementById("test").style.color = "black";
    }

}

function snoopify() {
    var textbox = document.getElementById("test");
    var partBox = textbox.value.split('.');
    var jbStr2 = partBox.join('-izzle.');

    // alert(textbox.value.split('.')[1])
    textbox.value = jbStr2.toUpperCase();

}
window.onload = pageLoad;