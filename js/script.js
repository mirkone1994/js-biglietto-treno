/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/
var price = document.getElementById("prezzo")
var km = prompt("Quanti km vuoi percorrere?");
var età = prompt("Quanti anni hai?")
var prezzo = km * 0.21;
console.log(prezzo)
if (età <= 18) {
    var minori = (prezzo / 20) * 100;
    console.log(minori)
}
if (età >= 65) {
    var over = (prezzo / 30) * 100;
    console.log(over)
}
if (minori) {
    price.innerHTML = "Il costo del biglietto è " + minori.toFixed(2) ;
} else if (over) {
    price.innerHTML = "Il costo del biglietto è " + over.toFixed(2) ;
} else if (prezzo) {
    price.innerHTML = "Il costo del biglietto è " + prezzo.toFixed(2) ;
}
