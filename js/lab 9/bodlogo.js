// Бодлого 1. Өгөгдсөн тоонд тэг орсныг косолд хэвлэ. Оролт: 1007, Гаралт: 2
var too = 1007; 
var urDun = too.toString().split('');
var tool = 0;
for(var i = 0; i < urDun.length; i++){
    if(urDun[i] == 0){
        tool++;
    };
}
console.log("1. Уг тоонд " + tool + " ширхэг 0 байна.");

// Бодлого 2. 3 оронтой тоо өгөдсөн тоог палиндром эсэхийг шалгах функц бич.
var palindrom = 53033033035;
var palindromSalgah = palindrom.toString().split('');
function check(palindrom){
    for(var i = 0; i < Math.floor(palindromSalgah.length / 2); i++){
        if(palindromSalgah[i] == palindromSalgah[palindromSalgah.length - i-1]){
            continue;
        }else{
            console.log("2. үгүй ээ");
            return;
        }
    }
    console.log("2. Энэ палиндром тоо байна. ");
}

check(palindrom);


// Бодлого 3. Өгөгдсөн нэг хэмжээст бүхэл тоон массивт өгөгдсөн тоо байвал тухайн тооны харгалзах индексийг буцаан үгүй бол энэ тоо олдсонгүй гэж хэвлэ. 

var massive = [1, 2, 2, 4, 5];
var ugugdel = 2;
for(var i = 0; i < massive.length; i++){
    if(massive[i] == 2){
        console.log('3. ' + i);
    }
}

// Бодлого 4. 
var n = 4;
var fact = 1;
for(var i = 1; i <= n; i++){
    fact = fact * i;
    console.log('4. ' + i + '! = ' + fact);
}

// Бодлого 5. 1! + 2! + 3! + ... + n! нийлбэрийг ол. Оролт: 5, Гаралт: 153
var medqu = 5;
    niilber = fact + fact;
    console.log('5. ' + niilber);

// Бодлого 6. Тоон пирамид хэвлэ. 
var a = "";
for(var i=1; i<=5; i++){
    a = a + i;
    console.log('6. ' + a);
}

// Бодлого 7. 10 хүртэл давталт хийж, тоо тус бүрийг өмнөх тооны нийлбэртэй консолд хэвлэх 

var niilber =0;
for(var i = 1; i <= 10; i++){
    niilber = i + (i-1);
    console.log('7. end bn' +  niilber);
}

// Бодлого 9 *-н пирамидын хэвлэ. 
var a = "";
for(var i=1; i<=5; i++){
    a = a + "*";
    console.log('9. ' + a);
}

var w = "*****";
for (var i = 1; i <= 5; i++) {
  w = w.slice(0, -1);
  console.log('9. ' + w);
}



// nested loop dawhar dawtalt
// for(var i=1; i<=10; i++){
//     for(var j=1; j<=10; j++){
//         console.log(i + ' Х ' +j + '= ' + (i*j));
//     }
// }
// var n = 4;
// var fact = 1;
// for(var i = 1; i <= n; i++){
//     fact = fact * i;
//     console.log(i + '! = ' + fact);
// }

