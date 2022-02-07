// 1 quanti km percorrere
// 2 chiedere età
// 3 sconto 

const PREZZO_KM = 0.21;
const total = document.getElementById('prezzo-finale');

let lunghezzaTragitto = parseFloat(prompt('quanti Km devi percorrere ?'));

console.log(lunghezzaTragitto);

let etaUtente =parseInt(prompt('quanti anni hai?'));

console.log(etaUtente);

if (isNaN(lunghezzaTragitto) || isNaN ( etaUtente ) ){
    alert('i dati inseriti non sono corretti, inserire il formato giusto');
}
const COSTO_BIGLIETTO_INTERO = (lunghezzaTragitto) * (PREZZO_KM);

console.log(COSTO_BIGLIETTO_INTERO)
let sconto = 0;

const SCONTO_20 = 0.2

const SCONTO_40 = 0.4

if (etaUtente < 18) {
 
    sconto = COSTO_BIGLIETTO_INTERO * SCONTO_20;
    
    console.log(sconto);

}

else if (etaUtente > 60) {
    sconto = COSTO_BIGLIETTO_INTERO * SCONTO_40;
    
    console.log(sconto);
   
}


let costoBigliettoFinale = (COSTO_BIGLIETTO_INTERO - sconto).toFixed(2);



total.innerHTML = `Totale Viaggio ${costoBigliettoFinale}  &euro;`;


console.log(costoBigliettoFinale) 
