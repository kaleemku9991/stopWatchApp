let second=0;
let minute=0;
let hour=0;


let displaySecond=0;
let displayMinute=0;
let displayHour=0;

let interval=null;

let status="stopped";

function stopWatch(){

second++;
   if (second/60===1){
       second=0;
       minute ++;
       if(minute/60===1){
           minute=0;
           hour++;
       }
   }
  

if(second<10){
    displaySecond="0"+second.toString();
}
else{
    displaySecond=second;
}


if(minute<10){
    displayMinute="0"+minute.toString();
}
else{
    displayMinute=minute;
}


if(hour<10){
    displayHour="0"+hour.toString();
}
else{
    displayHour=hour;
}

document.getElementById("display").innerHTML=displayHour+":"+displayMinute+":"+displaySecond;

}



function startStop(){
    if(status==="stopped"){

        interval=window.setInterval(stopWatch,100);
        document.getElementById("startStop").innerHTML="Stop";
        status="started";
    }

    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML="Start";
        status="stopped";
    }

}

function reset(){
    window.clearInterval(interval);
    second=0;
    minute=0;
    hour=0;
    document.getElementById("display").innerHTML="00:00:00";
    document.getElementById("startStop").innerHTML="start";

}