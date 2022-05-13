console.log("test");
var audio = new Audio('../media/clap.wav');
audio.preload = 'auto';
audio.load();


var bpm = 80;
const MILLSECONDSINMINUTE = 60000
var halfBpmInMillSec = (MILLSECONDSINMINUTE / bpm) / 2;




var Interval = setInterval(function() {
    var clap = audio.cloneNode();
    clap.play();
    document.getElementById("box").style.backgroundColor = "black"; 
    setTimeout(() => {
        document.getElementById("box").style.backgroundColor = "white";
    }, halfBpmInMillSec);
}, Math.round(60000 / bpm));


function stop() {
    clearInterval(Interval)
}
function setBpm(){
    bpm = document.getElementById("input").value
    document.getElementById("bpmtext").innerHTML = "bpm is " + bpm
    clearInterval(Interval)
    var halfBpmInMillSec = (MILLSECONDSINMINUTE / bpm) / 2;

    Interval = setInterval(function() {
        var clap = audio.cloneNode();
        clap.play();
            document.getElementById("box").style.backgroundColor = "black"; 
        setTimeout(() => {
            document.getElementById("box").style.backgroundColor = "white";
        }, halfBpmInMillSec);
    }, Math.round(60000 / bpm));
}

