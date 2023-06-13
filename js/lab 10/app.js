var slide = ["slide 1", "slide 2", "slide 3", "slide 4", "slide 5"];

var utga = document.querySelector(".utga");
var i = -1;

function next(){
    i++
    if(i>=slide.length){
        i=0;
    }
    utga.innerText = slide[i];
}

function prev(){
    i--;
    if(i<0){
        i= slide.length-1;
    }
    utga.innerText = slide[i];
}

// document.querySelector(".image").src = i[0];
// js slider image oruulah -- HW. Self study deer orj ireh tul uursduu uchraa ol gne hehe 

// setTimeout() --> code-g her hugatsaani daraa ajillahiig tohiruuldg function. Ene function millisecond hemjeegeer tootsdog. 1000msec = 1s\

// 3n utga awdg -- Awah func, second, argument

// function hi(name){
//     console.log("Sn bn uu?" + name);
// }
// setTimeout(prev, 2000);
var auto;
function autoPlay(){
    i++
    if(i>=slide.length){
        i=0;
    }
    utga.innerText = slide[i];
    auto = setTimeout(autoPlay, 2000);
}

autoPlay();

// ClearTimeout() -- > setTimeout - g clear/zogsoodg func

function stop(){
    clearTimeout(auto);
}