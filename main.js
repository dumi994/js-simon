// Un alert() espone 5 numeri generati casualmente.
var arrayPc = [];
var arrayUtente = [];
var numMax = 100;

function randomNumb(min, max){
   Math.floor(Math.random()*(max - min + 1) + min);
}


while (arrayPc.length < 5){
    number = randomNumb (1, numMax);
    if(!arrayPc.includes(number)){
        arrayPc.push(number);
    }
} 
console.log(arrayPc);



/* function randomNumber (){
    var pcNumb = Math.floor(Math.random() * (100 - 1))+ 1;
    console.log(pcNumb); 
    arrayPc.push(pcNumb);
    for (var i =0; i < 5; i++){
        arrayPc = pcNumb[i];

        if (array.length < 5){
        pcNumb;
        };
    }
    
} */

// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.