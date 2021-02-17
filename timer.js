const timer = document.getElementById('timeNum');

var timerOn = false; 
var sec = 0;
var hr = 0;
var min = 0;

function timerStart(){
    if(timerOn == false){
        timerOn = true;
        timerCycle();
    }
}
function timerStop(){
    if(timerOn == true){
        timerOn = false;
    }
}
function timerCycle(){
    if(timerOn == true){
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;

        if(sec == 60){
            min = min + 1;
            sec = 0;
        }
        if(min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        if(sec < 10 || sec == 0){
            sec = '0' + sec;
        }
        if(min < 10 || min == 0){
            min = '0' + min;
        }
        if(hr<10 || hr == 0){
            hr = '0' +hr;
        }
        timer.innerHTML =  hr + ':' + min + ':' + sec;
        setTimeout("timerCycle()",1000);
    }
}
function resetTimer() {
    timer.innerHTML = '00:00:00';
    timerOn =false;
    sec = 0;
    min = 0;
    hr = 0;
}