/*
    Todo:
    * resize canvas to fill window (leave some margin)
    * add buttons for 15, 30 minutes
    * add box for custom duration
*/

var startTime;
var targetTime;
var timerActive;
var canvas;
var barSize;

function init() {
    startTime = 0;
    targetTime = 0;
    timerActive = false;
    barSize = {w: 200, h: 50}
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    resize();
    update();
}

function resize() {
    canvas.width = document.getElementsByTagName("body")[0].clientWidth;
    canvas.height = canvas.width/4;
    barSize.w = document.getElementsByTagName("body")[0].clientWidth
    barSize.h = barSize.w/4;
}

function update() {
    if (timerActive && Date.now() >= targetTime) {
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
        ctx.fillRect(0,0,barSize.w,barSize.h);
        ctx.fillStyle = "#20FF20";
        ctx.fillRect(0,0,barSize.w-((Date.now()-startTime)/(targetTime-startTime)*barSize.w),barSize.h);
        //console.log((Date.now()-startTime)/(targetTime-startTime)*100);
    } else {
        ctx.fillStyle = "#202020";
        ctx.fillRect(0,0,barSize.w,barSize.h);
    }
}

function setTargetTime(interval) {
    startTime = Date.now();
    targetTime = Date.now() + interval;
    timerActive = true;
    render();
}