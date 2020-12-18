/*
    Todo:
    * resize canvas to fill window (leave some margin)
    * add buttons for 15, 30 minutes
    * add box for custom duration
*/

var startTime;
var targetTime;
var timerActive;
var date;
var canvas;

function init() {
    console.log("init()");
    startTime = 0;
    targetTime = 0;
    timerActive = false;
    date = new Date();
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    update();
}

function update() {
    date = new Date();
    if (timerActive && date.getTime() >= targetTime) {
        timerActive = false;
        console.log("timer ended");
    } else {
        
    }
    requestAnimationFrame(render);
    setTimeout(update,20);
}

function render() {
    if (timerActive) {
        ctx.fillStyle = "#FF2020";
        ctx.fillRect(0,0,100,25);
        ctx.fillStyle = "#20FF20";
        ctx.fillRect(0,0,100-((date.getTime()-startTime)/(targetTime-startTime)*100),25);
        console.log((date.getTime()-startTime)/(targetTime-startTime)*100);
    } else {
        ctx.fillStyle = "#202020";
        ctx.fillRect(0,0,100,25);
    }
}

function setTargetTime(interval) {
    date = new Date();
    startTime = date.getTime();
    targetTime = date.getTime() + 2000;
    timerActive = true;
    render();
}