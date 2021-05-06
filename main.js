// Un alert() espone 5 numeri generati casualmente.
var arrayPc = [];
var arrayUtente = [];
function randomNumb(min, max){
   return Math.floor(Math.random()* (max - min + 1) + min);
}
console.log(randomNumb(1, 100));
for (var i = 0; i < 5; i++){
    arrayPc.push(randomNumb(1, 100))
}
console.log(arrayPc);

alert (`Memorizza questi numeri, ${arrayPc}`);





// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.