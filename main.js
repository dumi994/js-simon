// Un alert() espone 5 numeri generati casualmente.

var arrayPc = [];


function randomNumb(min, max){
   return Math.floor(Math.random()* (max - min + 1) + min);
}

for (var i = 0; i < 5; i++){
    arrayPc.push(randomNumb(1, 100))
}
console.log("Memorizza questi numeri " + arrayPc);
alert (`Memorizza questi numeri, ${arrayPc}`); 

// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().


setTimeout(function(){
    var commonNumbers = [];
    for (var i = 0; i < 5; i++){
        var userNumber = Number(prompt('inserisci i numeri memorizzati uno ad uno'));
        if (arrayPc.includes(userNumber)){
            commonNumbers.push(userNumber);
        }
    }
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

    alert ('hai indovinato ' + commonNumbers.length + ' i numeri sono ' + commonNumbers);
}, 30000)
/* var timerEl = document.getElementById('timer');
var intervallo;

intervallo = setInterval(function(){
    var timer = 30;
    timer--;
    console.log(timer);
    document.getElementById('timer').innerHTML = timer;
},1000) */