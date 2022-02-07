// 1 quanti km percorrere
// 2 chiedere età
// 3 sconto 

const PREZZO_KM = 0.21;


let lunghezzaTragitto = parseInt(prompt('quanti Km devi percorrere ?'));

console.log(lunghezzaTragitto);

let etaUtente =parseInt(prompt('quanti anni hai?'));

console.log(etaUtente);

const COSTO_BIGLIETTO_INTERO = (lunghezzaTragitto) * (PREZZO_KM);

console.log(COSTO_BIGLIETTO_INTERO)

const SCONTO_20 = 0.2

const SCONTO_80 = 0.8

if (etaUtente < 18) {

    let bigliettoSconto20  = COSTO_BIGLIETTO_INTERO - (COSTO_BIGLIETTO_INTERO * SCONTO_20);

    console.log(bigliettoSconto20)

}

else if (etaUtente > 60) {
    let bigliettoSconto80  = COSTO_BIGLIETTO_INTERO - (COSTO_BIGLIETTO_INTERO * SCONTO_80);

    console.log(bigliettoSconto80)

}
