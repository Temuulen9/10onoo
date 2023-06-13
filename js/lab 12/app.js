var display = document.querySelector('.display');
var op = document.querySelector('.op');
var val = document.querySelector('.val');

val.addEventListener('click', () => {
    display.value += val.value;
})

// function kk(clickedButton){
//     var temdeg = display.value; 
//     var temdegt = clickedButton.value;
//     temdeg = temdeg + temdegt;
//     console.log(temdeg);
//     if(display.value !=0){
//         temdeg = temdeg + display.value;  
//         display.value = " ";
//         console.log(temdeg);
//     }
// }


// kk();
// function bodoh(){
//     var temdeg;
//     // eval(5*/10)  ---> () dotor bichsen mathematic uildliig hiij ur dun gargadg function
//     display.value = eval(temdeg);
// }


function clean(){
    display.value = " ";
}

function del(){
    display.value = display.value.slice(0, -1);
}

// zuragtai slider
// time lap deeree doli nemeh
// iphone deerh shig calculator hiine
// keyboard - noos utga awahgu bh


// function bodoy(){
//     var value = 0;
//     var saw = 0; 

// }
