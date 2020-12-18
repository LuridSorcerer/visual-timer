var startTime;
var targetTime;
var canvas;

function init() {
    console.log("init()");
    startTime = 0;
    targetTime = 0;
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
}

function update() {
    console.log("update()");
}

function render() {
    console.log("render()")
}

function setTargetTime(interval) {
    console.log("setTargetTime("+interval+")");
}