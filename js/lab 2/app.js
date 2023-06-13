// 1. Өгөгдсөн тооны сүүлийн цифрийг хэвлэх 
// promt(); -- garaas utga awdag function, toon utga awah bol promptiin urd + tawina
// var too = +prompt("Ta too oruulna uu"); 
// var lastNumber;
// lastNumber = too % 10;
// console.log(too + "-n suuliin tsifr " + lastNumber);

// 2. Ugugdsun 2 orontoi toonii tsifruudiin niilberiig olj hewle
// math.floor(); -- butarhai toog buhel too bolgh 
// var a = prompt("Ta too oruulna uu");
// var first, second;
// first = a % 10;
// second = Math.floor(a /10);
// console.log(first + second);

// 3. Garaad sec --- min sec ruu horwuulne uu 200 sec 3 min 20sec

// var sec = +prompt("Ta sec utga oruulna uu");
// var minute = Math.floor(sec / 60); 
// var sec2 = sec % 60;
// console.log(minute + "minute " + sec2 + "second");  

// If statement --> хэрвээ гэсэн нөхцөл шалгадаг
// If, else --> 
// If, else if

var age = 20;
// == --> tentsuu, <, >, <=, >= != --> tentsuu bish
// && --> and, || --> or

if(age <= 18 && age > 0){
    console.log("Ta nasand hureegu bn");
}else if(age <= 0){
    console.log("Buruu utga oruulsan bn");
}
else{
    console.log("Ta nasand hursen bn");
}

var too = -5; 
if(too < 0){
    console.log(too + " bol surug too");
}else{
    console.log(too + " eyreg too bn")
}

var number = 35;
if(number % 2 == 0){
    console.log("ene bol tegsh too bnaa");
}else{
    console.log("ene bol sondgoi too bn");
}

// 100-aas ih bwal 5-d urjuulii, baga bwal 5-d huwaay

if(number < 100){
    console.log("baga bgaa tul " + (number / 5));
}else if(number == 100){
    console.log("100 - tai tentsuu bol ym hii gj heleegu");
}
else{
    console.log("ih bgaa tul " + (number * 5));
}

// Toog 5 bolon 7d zereg huwaagdah uguig shalga 

if(number % 7 == 0 && number % 5 == 0){
    console.log("Ene n 7 bolon 5-d huwaagddg too bn");
}else{
    console.log("Huwagdahgu too bn");
}

// 2 toonii ih bagiig ol

var firstOne = 25; 
var secondOne = 25; 
if(firstOne > secondOne){
    console.log(firstOne + " болон " + secondOne + " энэ хоёрийн " +firstOne + " тоо их байна шүү дээ найзаа");
}else if(firstOne == secondOne){
    console.log("Энэ " + firstOne + " болон " + secondOne + " тоонууд тэнцүү байна.");
}
else{
    console.log(firstOne + " болон " + secondOne + " энэ хоёрийн " +secondOne + " тоо их байна шүү дээ");
}

// Garaas 0-100 dun oruulahad A, B, C, D, F unelgee ogoy 

// var dun = prompt("Дүнгээ оруулна");
// if(dun >=90 && dun <=100){
//     console.log("ta a дүн авсан байна.");
// }else if(dun >= 80 && dun <=89){
//     console.log("ta B дүн авсан байна.");
// }else if(dun >= 70 && dun <=79){
//     console.log("ta C дүн авсан байна.");
// }else if(dun >= 60 && dun <=69){
//     console.log("ta D дүн авсан байна.");
// }else if(dun >= 0 && dun <=59){
//     console.log("ta F дүн авсан байна.");
// }else{
//     console.log("ta buruu utga oruulsan bn");
// }

// Zuwhun eyreg toonii niilberiig olooroi 

var too1 = -30;
var too2 = -5;
var too3 = 60;

// if(too1<0){
//     too1 = 0
// }if(too2<0){
//     too2 = 0
// }if(too3<0){
//     too3 = 0
// }
// console.log(too1 + too2 + too3);

if(too1<0){
    too1 = too1 * -1
}if(too2<0){
    too2 = too2 * -1
}if(too3<0){
    too3 = too3 * -1
}
console.log(too1 + too2 + too3);