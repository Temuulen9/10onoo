var hooson = 0;
var hooson1 = 0;
function random(){
    var zohiolch = document.querySelector(".author");
    var helsenUg = document.querySelector(".text");
    var quotes = {
        "Don Marquis" : "Honesty is a good thing, but it is not profitable to its possessor unless it is kept under control.",
        "Rudyard Kipling" : "Take everything you like seriously, except yourselves.",
        "Edward Young" : "Some for renown, on scraps of learning dote, And think they grow immortal as they quote.",
        "John Muir" : "The clearest way into the Universe is through a forest wilderness.",
        "Robert Frost" : "The brain is a wonderful organ. It starts working the moment you get up in the morning and does not stop until you get into the office.",
        "Dr. Seuss" : "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
        "Edward Chilton" : "I'm worried that the universe will soon need replacing. It's not holding a charge.",
        "Susan Rice" : "Once you've learned to study in a bathing suit on the grass with muscled men throwing frisbees over your head, you can accomplish almost anything.",
    }
    // Object - keys, values ялгаж, тусад нь харуулах
    // var authors = Object.keys(quotes); ---> Object-n key-g ylgan awahdaa
    // var text = Object.values(quotes); ---> Object-n value-g ylgan awahdaa
    var authors = Object.keys(quotes);
    var text = Object.values(quotes);
    // console.log(text[0]);
    // console.log(quotes);
    console.log(authors);

    zohiolch.innerText = authors[hooson++];
    helsenUg.innerText = text[hooson++];
    if(hooson > authors.length-1){
        hooson = 0;
        hooson1 = 0;
    }

        //     text.style=colors[index3++];
    //     button.innerText=colors[index2++];
    //     body.style.backgroundColor=colors[index++];
    //     if(index > colors.length-1){
    //         index = 0;
    //         index2 = 0;
    //         index3 = 0;
    //     }
    // }
}

