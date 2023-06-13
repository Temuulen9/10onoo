// setInterval
// var i = 0;
// function hi(){
//     i++;
//     console.log("Snu" + i);
// }
// setTimeout(hi, 2000);
// setInterval(hi, 2000);

var timeEl = document.querySelector(".time");
var hour = 0; minute = 0; second = 0; millisecond = 0;
var turshult = 0;

function watch(){
    millisecond++;
    // if(millisecond > 9){
    //     timeEl.innerText = "0" + hour + ":" + "0" + minute + ":" + "0" + second + ":" + millisecond;
    // }else{
    //     timeEl.innerText = "0" + hour + ":" + "0" + minute + ":" +"0" + second + ":" + "0" + millisecond; 
    // }
    // if(second > 9){
    //     timeEl.innerText = "0" + hour + ":" + "0" + minute + ":" + second + ":" + millisecond;
    // }else{
    //     timeEl.innerText = "0" + hour + ":" + "0" + minute + ":" +"0" + second + ":" + "0" + millisecond; 
    // }
    // if(minute > 9){
    //     timeEl.innerText = "0" + hour + ":" + minute + ":" + second + ":" + millisecond;
    // }else{
    //     timeEl.innerText = "0" + hour + ":" + "0" + minute + ":" +"0" + second + ":" + "0" + millisecond; 
    // }
    // if(hour > 9){
    //     timeEl.innerText = hour + ":" + minute + ":" + second + ":" + millisecond;
    // }else{
    //     timeEl.innerText = "0" + hour + ":" + "0" + minute + ":" +"0" + second + ":" + "0" + millisecond; 
    // }

    if(hour > 9){
        timeEl.innerText = hour + ":" + (minute > 9 ? minute : "0" + minute) + ":" + (second > 9 ? second : "0" + second) + ":" + (millisecond > 9 ? millisecond : "0" + millisecond);
    }else{
        timeEl.innerText = "0" + hour + ":" + "0" + minute + ":" + (second > 9 ? second : "0" + second) + ":" + (millisecond > 9 ? millisecond : "0" + millisecond); 
    }
    // ternary operator (nuhtsul shalgah)
    // (condition) ? valueIfTrue : valueIfFalse
    
    // var s = second < 10 ? second : "0" + second;


    if(millisecond == 99){
        second++;
        millisecond = 0;
    }
    if(second == 60){
        minute++;
        second = 0;
    }
    if(minute == 60){
        hour++;
        minute = 0;
    }
}

var ehleh;

function start(){
    ehleh = setInterval(watch, 10); 
}

function stop(){
    // millisecond = 0;
    // second = 0;
    // minute = 0;
    // hour = 0;
    clearInterval(ehleh);
}

stop();


// document.createElement --> shine tag uusgeh function
// append() --> tag dotor code nemeh

function lap(){
    var lapEl;
    lapEl = document.createElement("p");
    lapEl.innerText = timeEl.innerText = hour + ":" + (minute > 9 ? minute : "0" + minute) + ":" + (second > 9 ? second : "0" + second) + ":" + (millisecond > 9 ? millisecond : "0" + millisecond);;
    var timer = document.querySelector(".timer");
    timer.append(lapEl);
}

function reset(){
    clearInterval(ehleh);
    hour = 0; 
    minute = 0; 
    second = 0; 
    millisecond = 0;
    timeEl.innerText = "0" + hour + ":" +  "0" + minute + ":" + "0" + second + ":" + "0" + millisecond;
    clearInterval("");
}

reset();