// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



// l'utente sceglie pari o dispari => prompt e if
let pariOdispari = prompt("Scegli pari o dispari");

while (( pariOdispari != "pari") && (pariOdispari != "dispari")) {
    pariOdispari = prompt("Scegli pari o dispari");
}

console.log("utente scelta" ,pariOdispari);

// inserisce un numero da 1 a 5 => prompt, parseInt e if 
let choosenNumber = parseInt(prompt("Inserire un numero da 1 a 5"));

while ((choosenNumber < 1) || (choosenNumber > 5)) {
    choosenNumber = parseInt(prompt("Inserire un numero da 1 a 5"));
}
console.log("numero scelto dall'utente", choosenNumber);


// generare un numero random da 1 a 5 (usare funzione) =>  math.floor, math.floor function (1, 5)
function numberGenerator (min, max) {
    let numberGenerated = Math.floor(Math.random() * max + min);
    return numberGenerated;
}

let pcNumber = numberGenerator (1, 5);
console.log("numero scelto dal pc" ,pcNumber);


// sommiamo le due variabile a cui abbiamo attribuito il valore tramite la funzione => let num1 = function, let num 2 = function, num1+num2

function somma(num1, num2) {
    let addizione = num1 + num2;
    return addizione;
}

let sommaGioco = somma(choosenNumber, pcNumber);
console.log("somma", sommaGioco);


// stabilire se somma è pari o dispari con funzione => function(numero) % 2 === 0 pari se no dispari
function pariDispariCheck(numero) {
    if (numero % 2 === 0) {
        let quelNumero= "pari";
        return quelNumero;
    } else {
        let quelNumero = "dispari";
        return quelNumero;
    }
}

// dichiarare chi ha vinto => if funzione pariDispariCheck ritorna pari e pariOdispari = pari allora log ha vinto l'utente se no ha vinto il pc
if ( pariDispariCheck(sommaGioco) === pariOdispari) {
    console.log("Hai vinto tu");
} else {
    console.log("Ha vinto il pc");
}