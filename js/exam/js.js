// 1. y тооны х зэрэгт дэвшүүлдэг функц бичнэ үү. / у=4  х=2  хариу 16 /
// var zeregtOloh = 0;

var zeregtOloh = 0;

function zereg(zeregtOloh){
  var x = 2;
  var medqu = 1; 
  for(var i = 1; i <= x; i++){
    var y = 4;
    medqu = medqu * y; 
  }
  console.log("1-р бодлогын хариу " + medqu);
}
// +3
zereg(zeregtOloh); 

// 3. Дараах пирамидыг хэвлэх функц бич.
// 5
// 54
// 543
// 5432
// 54321

a = "";
console.log('3-р бодлогын хариу: ');
for(var i = 5; i>=1; i--){
    a = a+i;
    console.log(a)
}
// +3

// 4. 1!+2!+3!+...+n! нийлбэрийг ол.
// оролт: 5
// гаралт: 153

var n = 5;
var fact = 1;
var niilber = 0;
for(var i = 1; i <= n; i++){
    fact = fact * i;
    niilber = niilber + fact;
}
console.log('4-р бодлогын хариу: ' + niilber);
// +3

// 5. [1,5,15,3,21,35] массив дотроос 7-д хуваагддаг тоонуудыг үржвэрийг олж хэвлэ

var massive = [1,5,15,3,21,35]; 
var urjwer = 1;
for(var i = 0; i <= massive.length; i++){
    if(massive[i] % 7 == 0){
        urjwer = urjwer * massive[i];
    }
}
// +3
console.log("5-р бодлогын хариу " + urjwer);

// 6. Өгөгдсөн тоо хэдэн ширхэг цифртэйг тоолж хэвлэдэг функц бич

var tsifr = 55000000;
function tooloh(tsifr){
    var tsifrNum = tsifr.toString().split("");
    // 
    var num = tsifrNum.length;
    console.log('6-р бодлогоны хариу ' + num);
    return;
}
tooloh(tsifr);
// +2.5

// 7. Гараас 2ш тоо өгөгдсөн ба, хэрэв тэдгээрийн үржвэр 1000-с их бол үржвэрийг буцааж, 1000-с бага бол нийлбэрийг буцаах функц бич.

var number1 = 600;
var number2 = 4;
var toonUrjwer = number1 + number2;
function tooOlog(toonUrjwer){
    if(toonUrjwer <= 1000){

    }else{
        console.log("7-р бодлогын хариу " + toonUrjwer);
        return;
    }
}
tooOlog(toonUrjwer);
// +2.5

// 8. Массив дотор Number болон String төрлийн утга өгөгдсөн бол зөвхөн Number төрөлтэй утгуудын нийлвэрийг хэвлэ.

var sum = 0;
var randomMassive=[80, 'zaza', 50, 'medqu', 'bayarlalaa'];
for(var i=0; i<=randomMassive.length-1; i++){
    if(typeof randomMassive[i] == "number"){
        sum = sum + randomMassive[i];
    }
}
console.log('8-р бодлогын хариу ' + sum);
// +3

// 10. Тусдаа утгатай хоёр массив байгаа бөгөөд өгөгдсөн массивуудаас тус тусын индекс бүрийн нийлбэрийг тооцоолж хооронд нь үрж.
// array1 = [1,0,2,3,4];
// array2 = [6,10,5,3,4,9];

var array1 = [1, 0, 2, 3, 4];
var array2 = [6, 10, 5, 3, 4, 9];
var array1Number = 0;
var array2Number = 0;

for(var i = 0; i < array1.length; i++){
    array1Number = array1Number + i; 
}
for(var i = 0; i < array2.length; i++){
    array2Number = array2Number + i; 
}

var arrayUrjwer = array1Number * array2Number;
console.log("10-р бодлогын хариу " + arrayUrjwer);
// +2.5

// 2. 100-999 хүртлэх тоонууд дундаас бүх палиндром тоог олж хэвлэ.

console.log('2-р бодлогын хариу: ');
var min = 100;
var max = 999;

for(var i = min; i <= max; i++){
    var palindromShalgana = i.toString().split('');
    var palindromMun = true;
    for(var j = 0; j <= palindromShalgana.length / 2; j++){
        if(palindromShalgana[j] !== palindromShalgana[palindromShalgana.length - j - 1]){
            palindromMun = false;
        }
    }
    if(palindromMun == true){
        console.log(i);
    }
}
// +3

// 9. 1-ээс 10 хүртлэх хүрдийг хэвлэ.
// 1 Х 1 = 1
// 1 Х 2 = 2
// .
// .
// .
// .
// 10 X 10 = 100
console.log("9-р бодлогын хариу: ");
    for(var i = 1; i <= 10; i++){
        for(var j = 1; j <= 10; j++){
            console.log(i + ' x ' + j + " = " + (i*j));
        }
    }

// +3