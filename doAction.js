/**
 * Created by nmk on 7.02.17.
 */


var clickCounter = require("./clickCounter");
var count1 = require("./count1");
var count2 = require("./count2");


    document.getElementById("p1").style.color = "blue";
    document.getElementById("p1").style.font.size = "large";
    document.getElementById("p1").style.background = "";
    document.getElementById("button").style.color = "red";

function mDown() {
    "button".style.backgroundColor = "#1ec5e5";
}

function mUp() {
    "button".style.backgroundColor = "#D94A38";
}

var getTime = function () {
    return (new Date().getHours() + ':' + new Date().getMinutes());
}
    alert(getTime());


    //window.count = 0;
    //window.clickNumber = 0;
    var count = 0;
    var clickNumber = 0;
span = document.getElementById('span');
span2 = document.getElementById('span2');

window.doAction = function () {

    clickNumber += clickCounter.arguments[0];
    //count = clickCounter.arguments[1];
    clickCounter(clickNumber % 2 == 0 ? count1(count) : count2(count));
    console.log(count, clickNumber);
    span.innerHTML = count;
    span2.innerHTML = clickNumber;

}


