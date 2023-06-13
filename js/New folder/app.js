// var number = [20,21,26,3];
// var number2 = number.map(x => {
//     if(x<2){
//         x*2;
//     }
// });

// console.log(number);
// console.log(number.every(x => x<210));

// console.log(number.filter(x => x <21));
// console.log(number.fill(2, 2)); -> number, start, end
// console.log(number.find(x => x<21)); --. hamgiin ehend oldson utgiig haruulna
// console.log(number.some(x => x<21)); --> huwisagchaas haij olno 
// console.log(number.every(x => x<21)); --> bugd iim utgatai eseh
// => shugaman function //arrow function
// var result = document.querySelector(".result");
// var countPlayer = document.getElementById("countPlayer");
// var countComputer = document.getElementById("countComputer");
// var countTie = document.getElementById("countTie");
// var countP = 0;
// var countC = 0;
// var countT = 0;
// function play(playerchoice){
//     var computerChoice = Math.floor(Math.random()*3)+1;
//     if(computerChoice == 1){
//         computerChoice = 'rock';
//     }else if(computerChoice == 2){
//         computerChoice = 'paper';
//     }else{
//         computerChoice = 'scissors';
//     }
//     if(playerchoice == computerChoice){
//         result.innerText = 'Result: Tie/Tentslee';
//         countT++;
//     }else if((playerchoice == 'rock' && computerChoice == 'scissors') || (playerchoice == 'paper' && computerChoice == 'rock' || (playerchoice == 'scissors' && computerChoice == 'paper'))){
//         result.innerText = 'Result: You win/Ta hojloo' + ' you choose ' + playerchoice + ' computer choose ' + computerChoice;
//         countP++;
//     }else{
//         result.innerText = 'Result: Computer win/Computer hojloo';
//         countC++;
//     }
//     countComputer.innerText = 'Count your win: ' + countC;
//     countPlayer.innerText = 'Count computer win: ' + countP;
//     countTie.innerText = 'Count tie: ' + countT;
//     }



var result = document.querySelector(".result");
var countPlayer = document.getElementById("countPlayer");
var countComputer = document.getElementById("countComputer");
var countTie = document.getElementById("countTie");
var countP = 0;
var countC = 0;
var countT = 0;
var restart = document.querySelector(".restart");

function text(){
    countComputer.innerText = 'Count your win: ' + countP;
    countPlayer.innerText = 'Count computer win: ' + countC;
    countTie.innerText = 'Count tie: ' + countT;
}
function play(playerchoice){
    // var computerChoice = [1, 2, 3]; 
    // Math.floor(Math.random()*3)+1;
    var computerChoice = [1, 2, 3][Math.floor(Math.random() * 3)];
    // for(var i = 0; i > computerChoice.length - 1; i++){
    //     Math.floor(Math.random(computerChoice));
    // }
    if(computerChoice == 1){
        computerChoice = 'rock';
    }else if(computerChoice == 2){
        computerChoice = 'paper';
    }else{
        computerChoice = 'scissors';
    }
    if(playerchoice == computerChoice){
        result.innerText = 'Result: Tie/Tentslee';
        countT++;
    }else if((playerchoice == 'rock' && computerChoice == 'scissors') || (playerchoice == 'paper' && computerChoice == 'rock' || (playerchoice == 'scissors' && computerChoice == 'paper'))){
        result.innerText = 'Result: You win/Ta hojloo' + ' you choose ' + playerchoice + ' computer choose ' + computerChoice;
        countP++;
    }else{
        result.innerText = 'Result: Computer win/Computer hojloo';
        countC++;
    }
    text();
    // countComputer.innerText = 'Count your win: ' + countP;
    // countPlayer.innerText = 'Count computer win: ' + countC;
    // countTie.innerText = 'Count tie: ' + countT;
    }
function ress(enhniih){
    countP = 0;
    countC = 0;
    countT = 0;
    result.innerText = "Result : "
    text();
    // countComputer.innerText = 'Count your win: ' + countP;
    // countPlayer.innerText = 'Count computer win: ' + countC;
    // countTie.innerText = 'Count tie: ' + countT;
}

    // Бодлого 3
// var e = [50, 7, 8, 9, 12, 15];
// function special(g){
//     var res = true;
//     for(var i = 0; i < e.length; i++){
//        if((e[i] % 2 == 0 && i % 2 != 0) || (e[i] % 2 != 0 && i % 2 == 0)){
//         res = false;
//        }
//     }
//     return res;
// }

// console.log(special(e));

// // Бодлого 3
var ontsgoi = [2, 41, 4, 7, 8];
var medqu = 0;
for(var i = 0; i < ontsgoi.length; i++){
    if((ontsgoi[i] % 2 == 0 && i % 2 == 0) || (ontsgoi[i] % 2 != 0 && i % 2 != 0)){
        medqu++;
        console.log(true);
    }
}
if(medqu == ontsgoi.length){
    console.log('Энэ бол онцгой массив байлаа. кк');
}else{
    console.log('Энэ онцгой биш массив байлаа. heh');
}

// var too = 12321;
// var newToo = too.toString().split('');
// for(i = 0, i > newToo.length i++){
//     if(too[0] == too[too.length-1])
// }
// console.log(newToo);