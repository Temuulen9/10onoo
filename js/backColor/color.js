// // massiv array
// // ugudliin turul --> number string boolean null undefined / neg string
// // massiv-->array olo turliin ugugdul hadgalj boldog
// // var massivNer=['text',100,true,100,'text2'];
// var food = ['buuz', 'huushuur','tsuiwan',];
// var too = [50,60,70,1,8,55];
// // ['element ']
// console.log(food);
// console.log(too);
// // elementiin bairhsliig index --> index n 0-ees eheldeg
// console.log(food[0]);
// console.log(food[1]);
// console.log(food[2]);
// food[3] ='burger';
// food[4] ='salat';
// food[0] ='sal';
// console.log(food[3]);
// console.log(food[4]);
// console.log(food[0]);
// console.log(food);
// console.log("Food gesen massivd " + food.length + " element bnaa");
// console.log("Element too" + too.length);
// for(var i=0; i<=too.length-1; i++){
//     console.log(too[i]);
// };
// var toon=[100,40,50,60,40];
// var niilber = 0;
// console.log('Element too' + toon.length);
// for(var i=0; i<=toon.length-1; i++){
//     console.log(too[i]);
// };
// var number = [2,5,9,1];
// for(var i=0; i<number.length; i++){
//     niilber = niilber + number[i];
//     console.log(number.indexOf(number[i] + " : " + number[i]));
// }
// console.log("Niilber" + niilber);
// // es6 --> nemeltuud
// // indexOf
// console.log(number.indexOf(9));
// // o index
// // typeOf --> ymr ugugdliin turul baigaag shalgadag
// // console.log(typeof(true));
// // var test = [10,52,5,10];
// // var n = prompt("Haih toogoo oruulna uu ");
// // for(var i=0; i<=test.length-1,i++){
// //     if(n==test[i]){
// //         console.log[test.indexOf(test[i]) + " : " + test[i]];
// //     }else{
// //         console.log("Tanii oruulsan too baihgui baina ");
// //     }
// // }
// // // garaas neg utga avahad massivd baigaa esehiig shalga
// // out --> Garaas hi gej bichihed --> 0 : hi bna

// var teext = ["text1", "text2", "text3"];
// // // pop(), push(), shift(), unshift
// // console.log(teext);
// // teext.pop();
// // teext.push("text4"); 
// // teext.shift();
// // teext.unshift();
// // // massiviin hamgiin svvliin elementiig ustgadag
// // // push massiviin hamgiin suuld element nemdeg
// // // shift massiviin hamgiin ehnii elementiig ustgadag
// // console.log(teext);
// var body = document.getElementsByTagName("body")[0];
// var button = document.getElementsByTagName("button")[0];
// var colors = ["yellow", "green", "blue", "orange","brown","red"];
// var index=0;
// var index2=0;
// var index3=0;
// function changeColor(kk){
//     teext.style=colors[index3++];
//     button.innerText=colors[index2++];
//     body.style.background=colors[index++];
//     if(index > colors.length-1 && index2 && index3){
//         index = 0;
//         index2 = 0;
//         index3 = 0;
//     }
// }

    // for(var i = 0; i > computerChoice.length - 1; i++){
    //     Math.floor(Math.random(computerChoice));
    // }


    // var body = document.getElementsByTagName("body")[0];
    // var button = document.getElementsByTagName("button")[0];
    // var text = 0;
    // var colors = ["yellow", "green", "blue", "orange","brown","red"];
    // var index = 0;
    // var index2 = 0;       
    // var index3 = 0;

    // function changeColor(kk){
    //     text.style=colors[index3++];
    //     button.innerText=colors[index2++];
    //     body.style.backgroundColor=colors[index++];
    //     if(index > colors.length-1){
    //         index = 0;
    //         index2 = 0;
    //         index3 = 0;
    //     }
    // }

    var body = document.getElementsByTagName("body")[0];
    var button = document.getElementsByTagName("button")[0];
    var text = 0;
    var colors = ["yellow", "green", "blue", "orange","brown","red"];
    var randomColor = 0;

    function changeColor(kk){
        randomColor = Math.floor(Math.random(colors.length-1)*5)+1 ;
        text.style = colors[randomColor];
        button.innerText=colors[randomColor];
        body.style.backgroundColor=colors[randomColor];
    }







