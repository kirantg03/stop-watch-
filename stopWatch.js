const start=document.getElementById("start");
const stop=document.getElementById("stop");
const reset=document.getElementById("reset");
const timer=document.getElementById("timer");

let IntervalTimer;
let  setTimer=0;
 function updateTimer(){
    const currentTime=new Date().getTime();
    const elapsedTime=currentTime-setTimer;
    const mins=Math.floor(elapsedTime/60000);
    const seconds=Math.floor((elapsedTime%60000)/1000);
    const miliseconds= Math.floor((elapsedTime&1000)/100);

    timer.textContent=`${mins}:${seconds}.${miliseconds}`;
 }

function startTimer(){
    clearInterval(IntervalTimer);
    setTimer=new Date().getTime()- setTimer;
    IntervalTimer=setInterval(updateTimer, 100);
    start.disabled=true;
    stop.disabled=false;
    reset.disabled=true;

}
function stopTimer(){
    clearInterval(IntervalTimer);
    start.disabled=false;
    stop.disabled=true;
    reset.disabled=false;


}

function resetTimer(){
    clearInterval(IntervalTimer);
    timer.textContent="00:00.00";
    setTimer=0;
    reset.disabled=true;
    start.disabled=false;
    stop.disabled=true;
}



start.addEventListener('click',startTimer);
stop.addEventListener('click',stopTimer);
reset.addEventListener('click',resetTimer);



