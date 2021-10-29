// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.
// Dare l’output relativo.

// chiedere all'utente di inserire una parola => prompt

// Creare una funzione per capire se la parola inserita è palindroma. => function(parola) charAt(i) per selezionare un carattere di un parola e poi confrontare quel carattere se il primo con l'ultimo, se il secondo con il penutilmo etc... Se è pari tutto ok se è dispari bisogna che non conti il carattere in mezzo. quindi fare un controllo finche non arriva alla metà quidi => math.Floor della lunghezza della parola. Se nel confronto troviamo una disuguaglianza allora variabile booleana = false, se no rimane vera. Ritornara la variabile.

    function palindroma(parolaUser) {
        // let parola = parolaUser;
        let lunghezza = parolaUser.length;
        let medio = Math.floor(lunghezza / 2);
        let palindroma = true;
    
        for ( let i = 0; i < medio ; i++ ){
            
            if (parolaUser.charAt(i) != parolaUser.charAt(lunghezza - 1 - i)) {
                palindroma = false;
            }
    
            return palindroma;   
        }
    
    }

    let parolaScelta = prompt("Inserisci parola");
    if (palindroma(parolaScelta) === true) {
        console.log("La parola che hai inserito è palindroma");
    } else {
        console.log("La parola che hai inserito non è palindroma");
    }
