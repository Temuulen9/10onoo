// Өгөгдлийн төрөл
// string number boolean null --> primitive / 1 төрлийн 1 утга авна. 
// Imprimitive -- 1ээс олон утга өгөгдөл авж болно.
// Massive -- ["text", true, 25, null];
// object -- object-г тодорхойлно. 
// key : value 
// var utas = {
//     ungu: "tsagaan",
//     helber: "durvuljin",
//     on: 2018,
//     ner: "Galaxy",
//     broken: false,
//     call: function(){
//         console.log('Duudlaga hiij bn');
//     }
// }
// console.log(utas.ner);
// console.error('vv');
// console.warn('yuu');
// utas.call();

// var human = {
//     "ner": "Bat",
//     age: 25,
//     gender: "male",
//     job: "programmist",
//     location: {
//         nation: "Mongolia",
//         country: "UB",
//         district: "BGD",
//         apartment: "144-1-3",
//     },
//     great: function(){
//         console.log("Sain baina uu? Namaig " + this.ner + " gedeg. Bi " + this.age + " nastai." + " Bi " + this.gender + ". Bi " + this.job + " ajil hiideg." + this.location.apartment);
//     }
// }

// human.great();

// var hun2 = {
//     ovog: human,
//     ner: "Bayar",
//     age: 5,
//     gender: "male",
//     job: "impty",
//     great: function(){
//         console.log("Minii ovog bol " + this.ovog.ner + ". Manai aaw " + (2023 - this.ovog.age) + " ond tursun." );
//     }
// }
// hun2.great();
// console.log(hun2["age"]);

// // for in -- dawtalt , ES6 nemelt

// // var too = [1, 56, 8, 9];
// // for(t in too){
// //     console.log(too[t]);
// // }

// var books = {
//     book1: {
//         name: "test name1",
//         author: "bold",
//         date: "2023-04-30",
//         pageNumber: 200,
//         read: false,
//     },
//     book2: {
//         name: "test name2",
//         author: "boldoo",
//         date: "2000-04-30",
//         pageNumber: 40,
//         read: false,
//     },
//     book3: {
//         name: "test name3",
//         author: "sarah",
//         date: "2008-12-30",
//         pageNumber: 543,
//         read: true,
//     },
//     book4: {
//         name: "test name4",
//         author: "bluee",
//         date: "2003-05-01",
//         pageNumber: 780,
//         read: false,
//     }
// }

// for (key in books){
//     // console.log(books[key].name);
//     if(books[key].pageNumber <= 150){
//         console.log(books[key].name);
//     }
// }

// 1. Company object uusgene.
// 2. Company 10 ajiltantai. Bugdiin hewlej gargana.
// 3. 25s deesh nasnii emegtei ajilchdiig haruul. 

var company = {
    ajiltan1: {
        ner: "Nyam", 
        nas: 30,
        utas: 99187345,
        email: "zz@gmail.com",
        emegtei: false,
    },
    ajiltan2: {
        ner: "Nyamaa", 
        nas: 45,
        utas: 99188080,
        email: "zzuk@gmail.com",
        emegtei: true,
    },
    ajiltan3: {
        ner: "Bolor", 
        nas: 27,
        utas: 88187345,
        email: "zukkz@gmail.com",
        emegtei: true,
    },
    ajiltan4: {
        ner: "Kuku", 
        nas: 59,
        utas: 98887345,
        email: "uuuz@gmail.com",
        emegtei: false,
    },
    ajiltan5: {
        ner: "Khulan", 
        nas: 36,
        utas: 99777345,
        email: "kukz@gmail.com",
        emegtei: false,
    },
    ajiltan6: {
        ner: "Zukk", 
        nas: 31,
        utas: 98737345,
        email: "zulzaga@gmail.com",
        emegtei: true,
    },
    ajiltan7: {
        ner: "Dodo", 
        nas: 23,
        utas: 99187345,
        email: "zz@gmail.com",
        emegtei: true,
    },
    ajiltan8: {
        ner: "Bat", 
        nas: 47,
        utas: 91177345,
        email: "zullz@gmail.com",
        emegtei: true,
    },
    ajiltan9: {
        ner: "Saruul", 
        nas: 49,
        utas: 91807080,
        email: "zzuu@gmail.com",
        emegtei: true,
    },
    ajiltan10: {
        ner: "Uulee", 
        nas: 24,
        utas: 88187300,
        email: "uulee@yahoo.com",
        emegtei: true,
    }
}

for (key in company){
    console.log(company[key].ner);
}

for (key in company){
    // console.log(company[key].ner);
    if(company[key].nas > 25 && company[key].emegtei == true){
        console.log(company[key].ner + " нь " + company[key].nas + " настай.");
    }; 
}

var femaleCount = 0;
var maleCount = 0;
var mobicom = 0;
for (key in company){
    if(company[key].emegtei == true){
        femaleCount++;
    }else{
        maleCount++
    } 
    // if(Math.floor(company[key].utas/1000000) == 99){
    //     mobicom++
    // }
}
console.log(femaleCount);
console.log(maleCount);
console.log(mobicom);

// for(key in company){
//     var newToo = company[key].utas.toString().split('');
//     if(newToo[0] == 9 && newToo[1] == 9){
//         mobicom++;
//         console.log(newToo)
//     }
//
var mobiNumber = 0; 
for(key in company){
    console.log((company[key].utas).toString().slice(0,2));
    if((company[key].utas).toString().slice(0,2) == 95 || (company[key].utas).toString().slice(0,2) == 99){
        mobiNumber++
    }
    console.log((company[key].utas).toString().slice(-1));
}
console.log("Mobigiin dugaar bn " + mobiNumber);
// slice()

// mobicom bolon yahoo mailtei huniig gargj irne. 

var yahoo = 0; 
for(key in company){
    if((company[key].email).toString().slice(-10) == "@yahoo.com"){
        yahoo++
    }
}
console.log("Yahoo хаягтай хэрэглэгч " + yahoo);

