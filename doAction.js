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

    // You shouldn't change values here - more over it doesn't make any sense
    // clickCounter is a function without properties
    //clickNumber += clickCounter.arguments[0];
    //count = clickCounter.arguments[1];
    // It still doesn't make sense because you pass the countX result not the callback itself
    // Call should look like clickCounter(clickNumber, clickNumber % 2 === 0 ? count1 : count2, count)
    // We pass the clickNumber as a value that has to be incremented, we pass the function as a function,
    // and the value we are working with
    clickCounter(clickNumber, clickNumber % 2 == 0 ? count1 : count2, count);
    // Click counter returns new value as count and clickNumber as an array. You should write it into some variable
    // var results = ...
    // Then the values should be got out of it: e.g. count = result[1]
    var results = clickCounter();
    clickNumber = results[0];
    var countX = results[1];
    count = results[2];
    console.log(count, clickNumber);
    span.innerHTML = count;
    span2.innerHTML = clickNumber;

}


